export default function InputField ({ label, name, type, placeholder, value, onChange, required }) {
  const step = type === "number" ? "10" : undefined;
  const min = type === "number" ? "0" : undefined;
  
  return (
    <div className="form-control w-full max-w-xs m-3">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="input input-bordered w-full max-w-xs"
        onChange={onChange}
        required={required}
        step={step}
        min={min}
      />
    </div>
  );
};
