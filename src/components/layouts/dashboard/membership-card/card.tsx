import { dashboardmembershipApi } from "@/api/membership-card";
import useSWR from "swr";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Report } from "notiflix";

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Member Name is required"),
  price_monthly: Yup.number().min(0, "Monthly Price cannot be negative").required("Monthly Price is required"),
  price_yearly: Yup.number().min(0, "Yearly Price cannot be negative").required("Yearly Price is required"),
  description: Yup.string().required("Description is required"),
  max_borrow_days: Yup.number().min(0, "Max Borrow Days cannot be negative").required("Max Borrow Days is required"),
  max_borrow_books_per_time: Yup.number().min(0, "Max Books per Borrow cannot be negative").required("Max Books per Borrow is required"),
  max_reserve_books_per_montly: Yup.number().min(0, "Max Reserved Books per Month cannot be negative").required("Max Reserved Books per Month is required"),
  renewal_allowed: Yup.boolean(),
  hold_allowed: Yup.boolean(),
});

// Format currency function for Vietnamese Dong
const formatCurrency = (value: number | string): string => {
  if (!value) return "0 ₫";
  return parseInt(value.toString().replace(/[^0-9]/g, ""), 10).toLocaleString("vi-VN") + " ₫";
};

export default function Card({ membershipId }: { membershipId: string }) {
  const { data, isLoading, mutate } = useSWR(`/membership-dashboard/${membershipId}`, () => 
    dashboardmembershipApi.getMembershipById(membershipId)
  );

  const handleSubmit = async (values: any) => {
    try {
      await dashboardmembershipApi.updateMembershipById(membershipId, values);
      mutate(); 
      Report.success(
        "Updated successfully",
        "You have successfully updated the membership.",
        "OK"
      );
    } catch (error) {
      console.error("Failed to update membership:", error);
    }
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          name: data?.name || "",
          price_monthly: data?.price_monthly || 0,
          price_yearly: data?.price_yearly || 0,
          description: data?.description || "",
          max_borrow_days: data?.max_borrow_days || 0,
          max_borrow_books_per_time: data?.max_borrow_books_per_time || 0,
          max_reserve_books_per_montly: data?.max_reserve_books_per_montly || 0,
          renewal_allowed: data?.renewal_allowed || false,
          hold_allowed: data?.hold_allowed || false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="grid gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Member Name:</label>
              <Field name="name" className="input" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Monthly Price:</label>
              <Field
                name="price_monthly"
                className="input"
                value={formatCurrency(values.price_monthly)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  setFieldValue("price_monthly", numericValue);
                }}
                onBlur={() => {
                  setFieldValue("price_monthly", parseInt(values.price_monthly, 10) || 0);
                }}
                onFocus={() => {
                  setFieldValue("price_monthly", values.price_monthly.toString().replace(/[^0-9]/g, ""));
                }}
              />
              <ErrorMessage name="price_monthly" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Yearly Price:</label>
              <Field
                name="price_yearly"
                className="input"
                value={formatCurrency(values.price_yearly)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  setFieldValue("price_yearly", numericValue);
                }}
                onBlur={() => {
                  setFieldValue("price_yearly", parseInt(values.price_yearly, 10) || 0);
                }}
                onFocus={() => {
                  setFieldValue("price_yearly", values.price_yearly.toString().replace(/[^0-9]/g, ""));
                }}
              />
              <ErrorMessage name="price_yearly" component="div" className="text-red-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Description:</label>
              <Field name="description" className="input" />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Max Borrow Days:</label>
              <Field name="max_borrow_days" type="number" className="input" />
              <ErrorMessage name="max_borrow_days" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Max Books per Borrow:</label>
              <Field name="max_borrow_books_per_time" type="number" className="input" />
              <ErrorMessage name="max_borrow_books_per_time" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Max Reserved Books per Month:</label>
              <Field name="max_reserve_books_per_montly" type="number" className="input" />
              <ErrorMessage name="max_reserve_books_per_montly" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Renewal Allowed:</label>
              <Field name="renewal_allowed" type="checkbox" className="input-checkbox" />
              <ErrorMessage name="renewal_allowed" component="div" className="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="font-semibold">Hold Allowed:</label>
              <Field name="hold_allowed" type="checkbox" className="input-checkbox" />
              <ErrorMessage name="hold_allowed" component="div" className="text-red-500" />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button type="button" className="btn btn-danger" onClick={() => console.log("Delete function")}>
                Delete
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
