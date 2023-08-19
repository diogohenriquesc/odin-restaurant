import createHeader from "../components/header";

const loadHeader = () => {
  const body = document.body;

  body.appendChild(createHeader());
}

export default loadHeader;