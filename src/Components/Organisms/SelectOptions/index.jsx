import "./style.css";
import OptionsList from "../../Molecules/OptionsList";

function SelectOptions() {
  let options = {
    pao: ["Australiano", "Brioche", "Gergelim", "Sal"],
    carne: ["Boi", "Porco", "Frango", "Vegetariano"],
    queijo: ["Molho Gorgonzola", "Prato", "Chedar", "Sem queijo"],
    salada: ["Alface", "Tomate", "Cebola", "Picles"],
    complemento: ["Bacon", "Cebola Caramelizada", "Molho Especial", "Pimenta Jalapeño"],
  };
  return <OptionsList options={options} />;
}

export default SelectOptions;
