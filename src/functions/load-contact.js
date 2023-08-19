import createContact from "../components/contact"

const loadContact = () => {
  const body = document.body;

  body.appendChild(createContact());
}

export default loadContact;