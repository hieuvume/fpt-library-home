const { useField } = require("formik");

type InputFieldProps = {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  placeholder,
  name,
  type = "text",
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="form-label text-gray-900">{label}</label>
        <input
          className={`input ${
            meta.touched && meta.error ? "border-danger" : ""
          }`}
          name={name}
          placeholder={placeholder}
          type={type}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <small className="text-danger mt-[-6px]">{meta.error}</small>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
