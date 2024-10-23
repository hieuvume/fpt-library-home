import Link from "next/link";

const { useField } = require("formik");

type InputFieldProps = {
  label: string;
  placeholder?: string;
  name: string;
  forgotLink?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordField = ({
  label,
  placeholder,
  name,
  forgotLink = false,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <>
      <div className="flex flex-col gap-1">
        {forgotLink ? (
          <div className="flex items-center justify-between gap-1">
            <label className="form-label text-gray-900">
              {label}
            </label>
            <Link
              className="text-2sm link shrink-0"
              href="/password/request"
            >
              Forgot Password?
            </Link>
          </div>
        ) : (
          <label className="form-label text-gray-900">{label}</label>
        )}
        <div className={`input ${meta.touched && meta.error ? "border-danger" : ""
          }`} data-toggle-password="true">
          <input
            name={name}
            placeholder={placeholder}
            type="password"
            {...field}
            {...props}
          />
          <button
            className="btn btn-icon"
            data-toggle-password-trigger="true"
            type="button"
          >
            <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
            <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
          </button>
        </div>
        {meta.touched && meta.error ? (
          <small className="text-danger mt-[-6px]">{meta.error}</small>
        ) : null}
      </div>
    </>
  );
};

export default PasswordField;
