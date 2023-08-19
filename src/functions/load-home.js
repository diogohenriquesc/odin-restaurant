import createHome from "../components/home";

const loadHome = () => {
  const body = document.body;

  body.appendChild(createHome());
} 

export default loadHome;