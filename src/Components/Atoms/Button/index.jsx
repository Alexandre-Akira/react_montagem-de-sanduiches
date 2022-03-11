import "./style.css";

function Button({ children, type, className }) {
  return (
    <button className={`${className} button`} type={type}>
      {children}
    </button>
  );
}

export default Button;
