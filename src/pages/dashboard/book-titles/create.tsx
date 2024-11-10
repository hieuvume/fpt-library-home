import { useFormik } from "formik";
import * as Yup from "yup";
import BookTitleTopBar from "@/components/layouts/dashboard/BookListTopbar";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { bookTitleDashboardApi } from "@/api/book-title";
import { Report } from "notiflix";

export default function CreateBookTitle() {
    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            ISBN: "",
            description: "",
            cover_image: "",
            price: 0,
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            author: Yup.string().required("Author is required"),
            ISBN: Yup.string().required("ISBN is required"),
            description: Yup.string().required("Description is required"),
            cover_image: Yup.string().url("Must be a valid URL"),
            price: Yup.number().min(0, "Price must be a positive number"),
        }),
        onSubmit: async (values) => {
            try {
              //  await bookTitleDashboardApi.addBookTitle(values);
                Report.success("Success", "Book Title created successfully", "OK");
                formik.resetForm();
            } catch (error) {
                console.error(error);
                Report.failure("Error", "Failed to create Book Title", "OK");
            }
        },
    });

    return (
        <div className="container-fixed">
            <h1>Create Book Title</h1>
            <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto mt-4 space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-500 text-sm">{formik.errors.title}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.author}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.author && formik.errors.author ? (
                        <div className="text-red-500 text-sm">{formik.errors.author}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">ISBN</label>
                    <input
                        id="ISBN"
                        name="ISBN"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ISBN}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.ISBN && formik.errors.ISBN ? (
                        <div className="text-red-500 text-sm">{formik.errors.ISBN}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-500 text-sm">{formik.errors.description}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="cover_image" className="block text-sm font-medium text-gray-700">Cover Image URL</label>
                    <input
                        id="cover_image"
                        name="cover_image"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cover_image}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.cover_image && formik.errors.cover_image ? (
                        <div className="text-red-500 text-sm">{formik.errors.cover_image}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                        className="w-full p-2 border rounded-md"
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-red-500 text-sm">{formik.errors.price}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Create Book Title
                </button>
            </form>
        </div>
    );
}

CreateBookTitle.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
