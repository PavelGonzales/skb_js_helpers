const createElement = (type, value) => {
  const element = document.createElement("span");
  element.className = type;

  if (typeof value === "object") {
    element.innerText = JSON.stringify(value);
  } else {
    element.innerText = value;
  }

  return element;
}

const displayResult = (...args) => {
  const code = document.createElement("code");
  code.className = "code";

  args.forEach(arg => {
    code.appendChild(createElement(typeof arg, arg));
  });

  document.body.append(code);
}

