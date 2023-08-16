import createHeader from "../components/header";
import createHome from "../components/home";

const loadPage = () => {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createHome());
} 

export default loadPage;