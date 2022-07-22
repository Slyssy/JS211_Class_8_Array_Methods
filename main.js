//$ Use a do...while loop to console.log the numbers from 1 to 1000.
let result = '';
let num = 0;
do {
  num = num + 1;
  result = `${result + num}, `;
} while (num < 1000);

console.log(result);

// $ Create an object (with keys and values) called person with the following data:
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female',
};

// $ Create a function that logs out the keys of the object using Object.keys().
const printKeys = (object) => {
  const keys = Object.keys(object);
  keys.forEach((key) => {
    console.log(key);
  });
};

printKeys(person);

// $ Create a function that logs out the keys and values of the object using Object.entries().

const printKeysAndValues = (object) => {
  const entries = Object.entries(object);
  entries.forEach((entry) => {
    const [key, value] = entry;
    console.log(`${key}: ${value}`);
  });
};

printKeysAndValues(person);

// $Create an arrayOfPersons that contains multiple "people" objects. You can
// $simply copy/paste the person object you made above multiple times. Feel free
// $to change the values to reflect multiple people you might have in your
// $database.

class Person {
  constructor(firstName, lastName, birthDate, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
  }
}

const leah = new Person('Leah', 'Marke', 'September 30, 1981', 'female');
const mary = new Person('Mary', 'Lyssy', 'November 11, 1949', 'female');
const kristin = new Person('Kristin', 'Lerma', 'December 20, 1976', 'female');
const dan = new Person('Dan', 'Payne', 'July 2, 1978', 'male');
const john = new Person('John', 'Struve', 'June 27, 1977', 'male');

const arrayOfPeople = [leah, mary, kristin, dan, john];
console.log(arrayOfPeople);

const oddBirthYear = (array) => {
  array.map((item) => {
    let birthYear = item.birthDate.slice(-4);
    if (birthYear % 2 === 1) {
      console.log(
        `${item.firstName} ${item.lastName} was born in ${birthYear} which is an odd number year.`
      );
    }
  });
};

oddBirthYear(arrayOfPeople);
