export default function SummaryField({ label, value }) {
  return (
    <p>
      <span className="number">{label}</span>
      <span className="text">{value}</span>
    </p>
  );
}
