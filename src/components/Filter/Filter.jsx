import "./Filter.scss";
const Filter = (props) => {
  const { label, value, onChange, filterId } = props;
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
