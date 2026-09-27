import "./TabButton.css";

export default function TabButton({ label, isSelected, ...props }) {
  return (
    <button className={isSelected ? "active" : "inactive"} {...props}>
      {label}
    </button>
  );
}
