/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// Оголошення типу Gender як union type
type Gender = "male" | "female";

// Створення змінної myGender типу Gender
const myGender: Gender = "male"; // або "female"

// Приклад використання
console.log(myGender); // Виведе "male"

export {};
