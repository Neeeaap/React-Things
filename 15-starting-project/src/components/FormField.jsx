export default function FormField({
  label,
  value,
  onChange,
  onBlur = () => {},
  errorMsg = "Invalid input",
  invalid,
}) {
  return (
    <div className="control no-margin">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={label}
        name={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={() => onBlur(label)}
      />
      <div className="control-error">{invalid && errorMsg}</div>
    </div>
  );
}
