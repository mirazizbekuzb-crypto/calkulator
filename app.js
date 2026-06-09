let mycan = (son1, son2, op) => {
  if (op === "+") {
    return son1 + son2;
  } else if (op === "-") {
    return son1 - son2;
  } else if (op === "*") {
    return son1 * son2;
  } else if (op === "/") {
    return son1 / son2;
  } else {
    return "eroor";
  }
};
console.log(mycan(10, 15, "+"));
console.log(mycan(10, 15, "-"));
console.log(mycan(10, 15, "*"));
console.log(mycan(10, 15, "/"));
