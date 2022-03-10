import "./style.css";
import Hamburguer from "../../../Assets/Hamburguer.png";

function HamburguerImage({ className }) {
  return <img className={`${className} hamburguer-image`} src={Hamburguer} alt="imagem de um hamburguer" />;
}

export default HamburguerImage;
