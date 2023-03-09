/* 
Напиши функцію slugify(title), яка приймає заголовок статті, параметр title,
і повертає slug, створений з цього рядка.
*/

function slugify(title) {
return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Arrays for begginers')); //'arrays-for-begginers'
console.log(slugify('English for developer')); //'english-for-developer'
console.log(slugify('Ten secrets of JavaScript')); //'ten-secrets-of-javascript'
console.log(slugify('How to become a JUNIOR developer for TWO WEEKS')); //'how-to-become-a-junior-developer-for-two-weeks'