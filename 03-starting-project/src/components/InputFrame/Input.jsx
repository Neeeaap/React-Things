export default function Input({ inputLabel, onInput, initialValue = 0 }) {
  return (
    <p>
      <label>{inputLabel}</label>
      <input
        type="text"
        required
        onChange={onInput}
        defaultValue={initialValue}
      />
    </p>
  );
}
