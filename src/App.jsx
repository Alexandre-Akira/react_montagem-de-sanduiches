import "./App.css";
import AppHeader from "./Components/Molecules/AppHeader";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppHeader title={"Pague Seu Sanduiche"} />
      <Outlet />
    </div>
  );
}

export default App;
