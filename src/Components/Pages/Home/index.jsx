import "../../Template/Home/style.css";
import options from "../../../db.js";
import SelectedOptions from "../../Organisms/SelectedOptions";
import SelectOptions from "../../Organisms/SelectOptions";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOptions: [
        { id: 1, category: "Pão", description: ["Australiano"], value: 4 },
        { id: 2, category: "Pão", description: ["Brioche"], value: 5 },
        { id: 3, category: "Pão", description: ["Gergelim"], value: 3 },
        { id: 4, category: "Pão", description: ["Sal"], value: 2.5 },
      ],
      selectedOptions: [],
      redirect: false,
    };
    this.selectedOptions = [];
    this.text = "";
    this.position = 0;

    this.updateMessage = this.updateMessage.bind(this);
    this.searchOptionByID = this.searchOptionByID.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.mergeCategoryOptions = this.mergeCategoryOptions.bind(this);
  }

  updateMessage() {
    switch (this.state.currentOptions[0].category) {
      case "Pão":
        this.text = "Escolha o seu pão";
        break;
      case "Carne":
        this.text = "Escolha a sua carne";
        break;
      case "Queijo":
        this.text = "Escolha o seu queijo";
        break;
      case "Saladas":
        this.text = "Escolha a sua salada";
        break;
      case "Complementos":
        this.text = "Escolha o seu complemento";
        break;
    }
    return this.text;
  }
  searchOptionByID(id) {
    const isSameID = (option) => {
      let optionCopy = JSON.parse(JSON.stringify(option));
      return optionCopy.id == id;
    };
    let option = JSON.parse(JSON.stringify(this.state.currentOptions));
    return option.find(isSameID);
  }

  handleOptionClick(e) {
    const optionElement = e.target;
    const optionID = e.target.id;
    let option = this.searchOptionByID(optionID);
    optionElement.classList.toggle("button--selected");
    let removedOption = false;

    const selectedOption = {
      category: option.category,
      description: option.description,
      value: option.value,
    };

    this.selectedOptions.forEach((element, index) => {
      if (selectedOption.description.toString() == element.description.toString()) {
        this.selectedOptions.splice(index, 1);
        removedOption = true;
      }
    });
    if (!removedOption) {
      this.selectedOptions = [...this.selectedOptions, selectedOption];
    }

    this.setState({ selectedOptions: this.mergeCategoryOptions(this.selectedOptions) });
    console.log(this.state.selectedOptions);
  }

  handleNextClick() {
    const selectedOptionsElements = document.querySelectorAll(".button--selected");
    selectedOptionsElements.forEach((selectedOption) => {
      selectedOption.classList.remove("button--selected");
    });
    this.position += 1;
    if (this.position < options.length) {
      this.setState({ currentOptions: options[this.position] });
    } else {
      this.setState({ redirect: true });
    }
  }

  mergeCategoryOptions(categoryOptions = []) {
    const options = JSON.parse(JSON.stringify(categoryOptions));

    const mergedOptions = options.reduce((result, currentOption) => {
      let category = currentOption.category;
      let optionWithSameCategory = result.find((option) => option.category === category);

      if (optionWithSameCategory) {
        optionWithSameCategory.value += currentOption.value;
        optionWithSameCategory.description = [...optionWithSameCategory.description, ...currentOption.description];
      } else result.push(currentOption);

      return result;
    }, []);
    return mergedOptions;
  }

  render() {
    return (
      <>
        <AppHeader title={"Monte Seu Sanduiche"} />
        <main className="home">
          <SelectOptions
            text={this.updateMessage()}
            onOptionClick={this.handleOptionClick}
            options={this.state.currentOptions}
          />
          <SelectedOptions onNextClick={this.handleNextClick} options={this.state.selectedOptions} />
          {this.state.redirect === true && (
            <Redirect
              to={{
                pathname: "/checkout",
                state: this.state.selectedOptions,
              }}
            />
          )}
        </main>
      </>
    );
  }
}

export default Home;
