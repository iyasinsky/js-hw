/* 
Напишіть код, який запитує логін за допомогою prompt.

Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль.
Якщо введено порожній рядок або натиснуто Esc – показати “Canceled”.
Якщо введено інший рядок – тоді покажіть “I don’t know you”.

Пароль перевіряється наступним чином:

Якщо він дорівнює “TheMaster”, тоді покажіть “Welcome!”,
Інший рядок – покажіть “Wrong password”,
Для порожнього рядка, або якщо введення було скасовано, покажіть “Canceled”.

Будь ласка, використовуйте вкладені if блоки.
Потурбуйтесь про загальну читабельність коду.

Підказка: передача порожнього вводу до запиту повертає порожній рядок ''.
Натискання ESC протягом запиту повертає null.
*/

const userName = 'Admin';
const userPassword = 'TheMaster';

const unknownUser = prompt("Who's there?");

if (unknownUser === userName) {
  const unknownPassord = prompt("Password?");
  if (unknownPassord === userPassword) {
    alert('Welcome!');
  } else if (unknownPassord === '' || unknownPassord === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (unknownUser === '' || unknownUser === null) {
  alert('Canceled');
} else {
  alert('I don’t know you');
}
