import createHeader from "../components/header";
import createHome from "../components/home";

const loadHome = () => {
  const body = document.body;

  body.appendChild(createHeader());
  body.appendChild(createHome());
} 

export default loadHome;