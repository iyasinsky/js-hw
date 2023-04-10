/* 
Напиши функцію makeTask(data),
яка приймає один параметр data - об'єкт з наступними властивостями.
text - текст завдання.
category - категорія завдання.
priority - пріоритет завдання.

Функція повинна створити і повернути новий об'єкт завдання,
не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed,
значення якої зберігається в однойменній локальній змінній.

В параметрі data гарантовано буде тільки властивість text,
а інші дві, category і priority, можуть бути відсутніми.

Тоді, в новому об'єкті завдання, у властивостях category і priority
повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
*/

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return { category, priority, ...data, completed };
  // Change code above this line
}

console.log(makeTask({}));
//{ category: "General", priority: "Normal", completed: false }
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(makeTask({ category: "Finance", text: "Take interest" }));
//{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }
console.log(makeTask({ text: "Buy bread" }));
//{ category: "General", priority: "Normal", text: "Buy bread", completed: false }