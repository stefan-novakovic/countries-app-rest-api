import "./Missing.css";

const Missing = ({ fetchError }) => {
  return <p>{fetchError}</p>;
};

Missing.defaultProps = {
  fetchError: "Page Not Found",
};

export default Missing;
