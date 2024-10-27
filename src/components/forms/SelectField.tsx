const { useField } = require("formik");

type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectField = ({
  label,
  name,
  options,
  ...props
}: SelectFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-1">
      <label className="form-label text-gray-900">{label}</label>
      <select
        className={`input ${
          meta.touched && meta.error ? "border-danger" : ""
        }`}
        name={name}
        {...field}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <small className="text-danger mt-[-6px]">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default SelectField;