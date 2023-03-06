const createElement = (value) => {
  const type = typeof value;
  const element = document.createElement("span");
  element.className = type;

  if (value === null) {
    element.className = "null";
  } else {
    element.className = type;
  }

  if (typeof value === "object") {
    element.innerText = JSON.stringify(value);
  } else {
    element.innerText = value;
  }

  return element;
}

let delay = 0;

const displayResult = (...args) => {
  delay += 300;

  setTimeout(() => {
    const code = document.createElement("code");
    code.className = "code";

    args.forEach(arg => {
      code.appendChild(createElement(arg));
    });

    document.body.append(code);

    console.log(...args)
  }, delay);
}

