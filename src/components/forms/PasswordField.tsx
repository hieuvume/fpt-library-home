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
          className="input"
          name={name}
          placeholder={placeholder}
          type={type}
          {...field}
          {...props}
        />
      </div>

      {/* {meta.touched && meta.error ? (
        <small className="text-danger">{meta.error}</small>
      ) : null} */}
    </>
  );
};

export default InputField;
