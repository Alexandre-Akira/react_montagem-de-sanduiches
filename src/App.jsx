import "./App.css";
import AppHeader from "./Components/Molecules/AppHeader";
import OrderOverview from "./Components/Organisms/OrderOverview";
import Input from "./Components/Atoms/Input";

function App() {
  return (
    <div className="App">
      <AppHeader title={"Pague Seu Sanduiche"} />
      <Input className="input--form" />
    </div>
  );
}

export default App;
