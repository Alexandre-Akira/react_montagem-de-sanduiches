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
    selectedOptions[index].selected = false;
    copySelectedOptions.splice(index, 1);
    this.setState({ selectedOptions: copySelectedOptions });
  }

  async removeOthersByCategory(selectedOption) {
    if (
      selectedOption.category != "Queijo" &&
      selectedOption.category != "Complementos" &&
      selectedOption.category != "Saladas"
    ) {
      const copySelectedOptions = this.state.selectedOptions.slice();
      const optionsToBeRemoved = copySelectedOptions.filter((option) => option.category === selectedOption.category);
      optionsToBeRemoved.forEach((option) => {
        option.selected = false;
        this.remove(option);
      });
    }
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

  render() {
    const { state, handleOptionClick, handleNextClick } = this;
    const { selectedOptions, currentOptions, redirect } = state;
    return (
      <>
        <AppHeader />
        <main className="home">
          <Menu options={currentOptions} text="Teste" onOptionClick={handleOptionClick} />
          <SelectedOptions onNextClick={handleNextClick} options={selectedOptions} />
        </main>
        {redirect && <Redirect to="Checkout" />}
      </>
    );
  }
}

export default Home;
