import "../../Template/Home/style.css";
import options from "../../../db.js";
import SelectedOptions from "../../Organisms/SelectedOptions";
import SelectOptions from "../../Organisms/SelectOptions";
import { useState } from "react";

function Home() {
  const [currentOptions, setCurrentOptions] = useState([
    { id: 1, category: "Pão", description: "Australiano", value: 4 },
    { id: 2, category: "Pão", description: "Brioche", value: 5 },
    { id: 3, category: "Pão", description: "Gergelim", value: 3 },
    { id: 4, category: "Pão", description: "Sal", value: 2.5 },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [position, setPosition] = useState(1);
  let text;

  function updateMessage() {
    switch (currentOptions[0].category) {
      case "Pão":
        text = "Escolha o seu pão";
        break;
      case "Carne":
        text = "Escolha a sua carne";
        break;
      case "Queijo":
        text = "Escolha o seu queijo";
        break;
      case "Saladas":
        text = "Escolha a sua salada";
        break;
      case "Complementos":
        text = "Escolha o seu complemento";
        break;
    }
    return text;
  }

  function searchOptionByID(id) {
    const isSameID = (option) => {
      return option.id == id;
    };
    let option = currentOptions.find(isSameID);
    return option;
  }

  function handleOptionClick(e) {
    const optionID = e.target.id;
    let option = searchOptionByID(optionID);
    const selectedOption = {
      category: option.category,
      description: option.description,
      value: option.value,
    };
    setSelectedOptions([...selectedOptions, selectedOption]);
    setCurrentOptions(options[position]);
    if (position < currentOptions.length) setPosition(position + 1);
  }

  return (
    <main className="home">
      <SelectOptions text={updateMessage()} onOptionClick={handleOptionClick} options={currentOptions} />
      <SelectedOptions options={selectedOptions} />
    </main>
  );
}

export default Home;
