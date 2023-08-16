const createElement = (tag, content, classes) => {
  const element = document.createElement(tag);
  
  if (content !== null) element.textContent = content;

  if (typeof classes === "string") {
    element.classList.add(classes);
  } else {
    element.classList.add(...classes);
  }

  return element;
}

export default createElement;