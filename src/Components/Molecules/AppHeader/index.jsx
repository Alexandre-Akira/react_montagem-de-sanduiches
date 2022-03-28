import "./style.css";
import Title from "../../Atoms/Title";

function AppHeader({ title }) {
  return (
    <header className="app-header">
      <Title className="title--app">{title}</Title>
    </header>
  );
}

export default AppHeader;
