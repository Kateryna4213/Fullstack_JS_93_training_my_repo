// const a = "new variable"; // ініціалізуємо завжди зі значенням

// console.log(a)
// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }
let count = 0;

function delayedWhileLoop() {
  if (count <= 15) {
    console.log(count);
    count++;
    setTimeout(delayedWhileLoop, 500); // Задержка в 1000 миллисекунд (1 секунда)
  }
}

delayedWhileLoop();
