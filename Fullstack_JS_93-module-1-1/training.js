// ❗️❗️ Патерн "раннє повернення"
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// console.log(checkStorage(12, 8));
// console.log(checkStorage(4, 8));
// console.log(checkStorage(8, 8));

// ❗️❗️ Оголошення масиву, виведення індексу масиву та значення масиву під цим індексом
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ❗️❗️Перетворення рядка на масив та рахування вартості гравірування
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//   const messageArray = message.split(" ");
//  const totalPrice = messageArray.length * pricePerWord;

//  return totalPrice;
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ❗️❗️ЗАДАЧА: ГЕНЕРАТОР SLUG
// function slugify(title) {
//     // Change code below this line
//   const slugToLowerCase = title.toLowerCase();
//     const slugArray = slugToLowerCase.split(" ");
//   const normalizedSlug = slugArray.join("-");
//   return normalizedSlug
//     // Change code above this line
//   }
//   console.log(slugify("Arrays for begginers"));

// ❗️❗️ ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength) {
//   return newArray.slice([0], [maxLength]);
// }  return newArray

//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// ❗️❗️ ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)
// function calculateTotal(number) {
//     // Change code below this line
//      let totalValue = 0;
//    for (i = 1; i <= number; i++) {
//      totalValue += i;
//    }
//    return totalValue;

//      // Change code above this line
//    }
//    console.log(calculateTotal(18));

// ❗️❗️ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//     // Change code above this line
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));

// ❗️❗️Важливий приклад з переприсвоєнням
// function findLongestWord(string) {
//   // Change code below this line
//   const stringSplitted = string.split(" ");
//   console.log(stringSplitted);
//   let theLongestWord = "";
//   for (let i = 0; i < stringSplitted.length; i++) {
//     if (stringSplitted[i].length > theLongestWord.length) {
//       theLongestWord = stringSplitted[i];
//     }
//   }
//   return theLongestWord;

//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord());

// ❗️❗️Гарний приклад з методом push()
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// ❗️❗️I will not be able to call a method push() on a variable without declairing it an array with a literal of an array ([look str. 119])
// function filterArray(numbers, value) {
//     // Change code below this line

//  let newArray = [];
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] > value) {newArray.push(numbers[i]);
//    } }

//  return newArray
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
// const message = "JavaScript - це цікаво";
// const messageArray = message.split("Script");
// console.log(messageArray);
// console.log(messageArray[1]);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: ["Ocho Rios", "Jamaika"],
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location);
// console.log(typeof location.city);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

const anotherObject = {
  make: "Ford",
  5: "five",
  model: "focus",
};
console.log(typeof anotherObject[5]);
