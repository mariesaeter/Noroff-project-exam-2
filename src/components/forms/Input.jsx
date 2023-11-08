const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val };
    default:
      return state;
  }
};

export const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value=""
      />
    ) : (
      <textarea name={props.name} rows="4" value="" />
    );
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};
