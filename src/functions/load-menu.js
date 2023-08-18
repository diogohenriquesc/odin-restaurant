import createHeader from "../components/header";
import createMenu from "../components/menu";

const loadMenu = () => {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createMenu());
}

export default loadMenu;