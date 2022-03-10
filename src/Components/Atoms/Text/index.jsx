import "./style.css";

function Text({ className, children }) {
  return <span className={`${className} text`}>{children}</span>;
}

export default Text;
