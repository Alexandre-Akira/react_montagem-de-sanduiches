import "../../Template/Home/style.css";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import Menu from "../../Organisms/Menu";
import SelectedOptions from "../../Organisms/SelectedOptions";
import { Redirect } from "react-router-dom";
import options from "../../../db.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOptions: options[0],
      selectedOptions: [],
      redirect: false,
    };
    this.position = 0;
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.checkIfExist = this.checkIfExist.bind(this);
    this.removeOthersByCategory = this.removeOthersByCategory.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.mergeOptionsByCategory = this.mergeOptionsByCategory.bind(this);
    this.updateOptionsTitle = this.updateOptionsTitle.bind(this);
  }

  //Methods
  add(selectedOption) {
    const { selectedOptions } = this.state;
    this.setState({ selectedOptions: [...selectedOptions, selectedOption] });
  }

  remove(selectedOption) {
    const { selectedOptions } = this.state;
    const copySelectedOptions = selectedOptions.slice();
    const index = copySelectedOptions.indexOf(selectedOption);
    selectedOptions[index].selected = false;
    copySelectedOptions.splice(index, 1);
    this.setState({ selectedOptions: copySelectedOptions });
  }

  async removeOthersByCategory(selectedOption) {
    const { selectedOptions } = this.state;
    if (selectedOption.category != "Complementos" && selectedOption.category != "Saladas") {
      const copySelectedOptions = selectedOptions.slice();
      const optionsToBeRemoved = copySelectedOptions.filter((option) => option.category === selectedOption.category);
      optionsToBeRemoved.forEach((option) => {
        const index = copySelectedOptions.indexOf(option);
        option.selected = false;
        copySelectedOptions.splice(index, 1);
        this.setState({ selectedOptions: copySelectedOptions });
      });
    }
  }

  checkIfExist(selectedOption) {
    const copySelectedOptions = this.state.selectedOptions.slice();
    const thisOptionExist = copySelectedOptions.includes(selectedOption);
    return thisOptionExist;
  }

  mergeOptionsByCategory(selectedOptions = []) {
    // const SelectedOptions = selectedOptions.slice() -- Copia o state mas mantem a referencia;

    const SelectedOptions = JSON.parse(JSON.stringify(selectedOptions.slice()));

    const mergedSelectedOptions = SelectedOptions.reduce((result, currentOption) => {
      let category = currentOption.category;
      let optionWithSameCategory = result.find((option) => option.category === category);

      if (optionWithSameCategory) {
        optionWithSameCategory.value += currentOption.value;
        optionWithSameCategory.description = [...optionWithSameCategory.description, ...currentOption.description];
      } else result.push(currentOption);

      return result;
    }, []);
    return mergedSelectedOptions;
  }

  //Events

  handleOptionClick(selectedOption) {
    if (this.checkIfExist(selectedOption)) {
      this.remove(selectedOption);
    } else {
      this.removeOthersByCategory(selectedOption).then(() => {
        selectedOption.selected = true;
        this.add(selectedOption);
      });
    }
  }

  handleNextClick() {
    this.position += 1;
    if (this.position < options.length) {
      this.setState({ currentOptions: options[this.position] });
    } else {
      this.setState({ redirect: true });
    }
  }

  updateOptionsTitle(currentOptions) {
    const category = currentOptions[0].category;
    let title = "";
    switch (category) {
      case "Pão":
        title = `Escolha seu ${category.toLowerCase()}`;
        break;
      case "Carne":
        title = `Escolha sua ${category.toLowerCase()}`;
        break;
      case "Queijo":
        title = `Escolha seu ${category.toLowerCase()}`;
        break;
      case "Saladas":
        title = `Escolha as suas ${category.toLowerCase()}`;
        break;
      case "Complementos":
        title = `Escolha os seus ${category.toLowerCase()}`;
        break;
    }
    return title;
  }

  render() {
    const { state, handleOptionClick, handleNextClick, mergeOptionsByCategory, updateOptionsTitle } = this;
    const { selectedOptions, currentOptions, redirect } = state;
    return (
      <>
        <AppHeader title="Monte Seu Sanduíche" />
        <main className="home">
          <Menu options={currentOptions} text={updateOptionsTitle(currentOptions)} onOptionClick={handleOptionClick} />
          <SelectedOptions onNextClick={handleNextClick} options={mergeOptionsByCategory(selectedOptions)} />
        </main>
        {redirect && <Redirect to={{ pathname: "Checkout", state: selectedOptions }} />}
      </>
    );
  }
}

export default Home;
