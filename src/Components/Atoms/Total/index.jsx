import "./style.css";

function formatNumber(number) {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function Total({ items, className }) {
  let total = 0;
  items.forEach((item) => (total += item.value));

  return <>{items.length > 0 && <p className={`${className}`}>Total: {formatNumber(total)}</p>}</>;
}

export default Total;
