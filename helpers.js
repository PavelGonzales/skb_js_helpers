/**
 * Создание элемента.
 * @param {any} value - Принимает любой тип данных: boolean, string, number, NaN, undefined, null, array, object.
 * @returns HTMLSpanElement
 */
const createElement = (value) => {
  // Опеределяем тип переданного значения
  const type = typeof value;
  // Создаем HTML элемент <span>
  const element = document.createElement("span");
  // Если знаечние null, то присваиваем css класс null. Так как typeof null === "object". Либо присваиваем css класс по имени типа переданного значения.
  if (value === null) {
    element.className = "null";
  } else {
    element.className = type;
  }
  // Если тип переданного значения равен object, то используем метод JSON.stringify, чтобы все привести к строке и корректно вывести. Иначе вместо [0,1] у нас будет 0,1. А вместо {"a":1,"b":{"c":2}} у нас будет [object Object].
  if (type === "object") {
    element.innerText = JSON.stringify(value);
  } else {
    element.innerText = value;
  }
  // Возвращаем созданный элемент из функции, чтобы в будущем его использовать.
  return element;
}

let delay = 0; // Переменная счетчика

/**
 * Отображение результата.
 * @param {any[]} args - Список аргументов.
 */
const displayResult = (...args) => {
  // При вызове функции мы увеличиваем счетчик на 300. При последующих вызовах у нас будут значения 300, 600, 900, 1200, и так далее.
  delay += 300;
  // Оборачиваем все во встроенную функцию setTimeout, чтобы использнять код по очереди через каждые 300 миллисекунд.
  setTimeout(() => {
    // Создаем HTML элемент <code>.
    const code = document.createElement("code");
    // Присваем элементу css класс code.
    code.className = "code";
    // Проходимся циклом по всем аргументам.
    args.forEach(arg => {
      // Добавляем в наш элемент code элементы, возвращаемые из функции createElement.
      code.appendChild(createElement(arg));
    });
    // Добавляем в <body> элемент code.
    document.body.append(code);
    // Так же выводим аргументы в консоль.
    console.log(...args)
  }, delay);
}

