import "./Filter.scss";
const Filter = ({ label, value, onChange, filterId }) => {

  return (
    <label className="filter">
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => onChange(filterId)}
      />
      {label}
    </label>
  );
};

export default Filter;
