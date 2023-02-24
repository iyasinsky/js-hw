/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// Створюємо перемінні
const employees = prompt('Введіть к-сть ваших співробітників');
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;
// Перебираємо всіх працівників циклом
for (let i = 1; i <= employees; i += 1) {
  // Генеруємо випадкову ЗП
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  )
  console.log(`ЗП работника ${i} = ${salary}`)
  // Сумуємо ЗП всіх працівників
  totalSalary += salary
}
// Логуємо
console.log('totalSalary: ', totalSalary);