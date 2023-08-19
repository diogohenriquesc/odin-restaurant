import createMenu from "../components/menu";

const loadMenu = () => {
  const body = document.body;

  body.appendChild(createMenu());
}

export default loadMenu;