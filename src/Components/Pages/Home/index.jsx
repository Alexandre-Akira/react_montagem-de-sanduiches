import "../../Template/Home/style.css";
import options from "../../../db.js";
import SelectedOptions from "../../Organisms/SelectedOptions";
import Menu from "../../Organisms/Menu";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import { Redirect } from "react-router-dom";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOptions: options[0],
      selectedOptions: [],
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.checkIfExist = this.checkIfExist.bind(this);
    this.removeOthersByCategory = this.removeOthersByCategory.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  //Methods
  add(selectedOption) {
    const { selectedOptions } = this.state;
    this.setState({ selectedOptions: [selectedOption, ...selectedOptions] });
  }

  remove(selectedOption) {
    const { selectedOptions } = this.state;
    const copySelectedOptions = selectedOptions.slice();
    const index = copySelectedOptions.indexOf(selectedOption);
    copySelectedOptions.splice(index, 1);
    this.setState({ selectedOptions: copySelectedOptions });
  }

  async removeOthersByCategory(selectedOption) {
    const copySelectedOptions = this.state.selectedOptions.slice();
    const optionsToBeRemoved = copySelectedOptions.filter((option) => option.category === selectedOption.category);
    optionsToBeRemoved.forEach((option) => {
      this.remove(option);
    });
  }

  checkIfExist(selectedOption) {
    const copySelectedOptions = this.state.selectedOptions.slice();
    const thisOptionExist = copySelectedOptions.includes(selectedOption);
    return thisOptionExist;
  }

  //Events

  handleOptionClick(selectedOption) {
    if (this.checkIfExist(selectedOption)) {
      this.remove(selectedOption);
    } else {
      this.removeOthersByCategory(selectedOption).then(() => {
        this.add(selectedOption);
      });
    }
  }

  handleNextClick() {
    console.log("teste");
  }

  render() {
    const { state, handleOptionClick, handleNextClick } = this;
    const { selectedOptions, currentOptions } = state;
    return (
      <>
        <AppHeader />
        <main className="home">
          <Menu options={currentOptions} text="Teste" onOptionClick={handleOptionClick} />

          <SelectedOptions onNextClick={handleNextClick} options={selectedOptions} />
        </main>
      </>
    );
  }
}

export default Home;
