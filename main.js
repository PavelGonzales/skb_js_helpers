// window.onload() нужен чтобы работа с DOM деревом началась после загрузки всех наших ресурсов.
window.onload = () => {
  displayResult(true, false);

  displayResult("test");

  displayResult(123);

  displayResult(NaN);

  displayResult(undefined);

  displayResult(null);

  displayResult([0, 1]);

  displayResult({a: 1, b: {c: 2}});
}
