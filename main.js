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
const kristin = new Person('Lane', 'Purcel', 'December 20, 2007', 'male');
const dan = new Person('Dan', 'Payne', 'July 2, 1978', 'male');
const john = new Person('John', 'Struve', 'June 27, 2015', 'male');
const kayla = new Person('Kayla', 'Purcel', 'September 27, 1995', 'female');

const arrayOfPeople = [leah, mary, kristin, dan, john, kayla];
console.log(arrayOfPeople);

// $Create a function that uses a for...of loop and an if statement to
// $console.log the value associated with the key birthDate of each object if
// $the birth year is an odd number.
for (const human of arrayOfPeople) {
  let birthYear = human.birthDate.slice(-4);
  if (birthYear % 2 === 1) {
    console.log(
      `${human.firstName} ${human.lastName} was born in ${birthYear} which is an odd number year.`
    );
  }
}

// $Use .map() to map over the arrayOfPersons and console.log() their
// $information.
const personInfo = (array) => {
  array.map((item, index) => {
    console.log(
      `Person ${index + 1}: ${item.firstName} ${
        item.lastName
      } is a ${item.gender.toUpperCase()} born on ${item.birthDate}`
    );
  });
};

personInfo(arrayOfPeople);

// $Use .filter() to filter the persons array and console.log Only males in the
// $array.
const onlyMales = (array) => {
  const males = array.filter((person) => {
    return person.gender === 'male';
  });
  console.log(males);
};

onlyMales(arrayOfPeople);

// $Create a function that returns true if the value of birthDate is before Jan
// $1, 1990.
const bornBefore1990 = (array) => {
  array.forEach((person) => {
    // *Setting variables for dates that have been converted to time stamps.
    let testDate = new Date('January 1, 1990').getTime();
    let birthDate = new Date(person.birthDate).getTime();
    console.log(
      // *Comparing each person's birth date against the test date.
      `${person.firstName} born before 1990? ${+birthDate < +testDate}`
    );
  });
};

bornBefore1990(arrayOfPeople);

// $Use .filter() to filter the persons array and console.log only people that
// $were born before Jan 1, 1990.
bornBefore1990Filter = (array) => {
  const bornBefore1990 = array.filter((person) => {
    let testDate = new Date('January 1, 1990').getTime();
    let birthDate = new Date(person.birthDate).getTime();
    // *The bornBefore1990 array will on consist of those people whose birthdate
    // *is less than the test date.
    return +birthDate < testDate;
  });
  console.log(bornBefore1990);
};

bornBefore1990Filter(arrayOfPeople);

// $BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
const canYouDrink = (date) => {
  // *Create a variable to store the date that is being entered into the
  // *function.
  const birthDate = new Date(date);
  // *Create a variable to store the current date.
  const now = new Date();
  // *Create a variable to store the difference in years between the date
  // *entered and the current date.
  let differenceYears = now.getFullYear() - birthDate.getFullYear();
  // *Create a variable to store the difference in months of the month of the
  // *date entered and the month of the current date.
  let differenceMonths = now.getMonth() - birthDate.getMonth();
  // *Create a variable to store the difference in days of the day of the
  // *date entered and the day of the current date.
  let differenceDays = now.getDate() - birthDate.getDate();
  // # If your born in the same year but in a later month, subtract a year from the differenceYear variable or subtract a year if your born in the same month but a later day.
  if (differenceMonths < 0 || (differenceMonths === 0 && differenceDays < 0)) {
    differenceYears--;
  }

  // *Creating variable to store date options to be used in the international
  // *date method below
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // *Setting locale to match the browser language.
  const locale = navigator.language;

  // *Creating a variable that will hold the value of the date entered after
  // *using the international date format method.
  const dateUS = new Intl.DateTimeFormat(locale, dateOptions).format(birthDate);

  console.log(
    `A person born on ${dateUS} is ${differenceYears} years, ${
      // *Using the differenceMonths value to determine how to write the months.
      differenceMonths < 0
        ? // *If the value is < 0 we want to display the number as the difference
          // *between it and 12.
          (differenceMonths = 12 + differenceMonths)
        : // *If the value is > 0 we want to display the number as the value of
          // *adding the difference months value to 0.
          (differenceMonths = 0 + differenceMonths)
    } months old, give or take.`
  );
  // *Console logging the boolean of whether or not the differenceYears variable
  // *is >= 21.
  console.log(
    `True of False: This person is old enough to drink.`,
    differenceYears >= 21
  );
  return differenceYears >= 21;
};

canYouDrink('December 20, 2001');

// $BONUS - .filter() out the people in the array who are younger than 21.

const whosNot21 = (array) => {
  // *Using the filter() method to filter out people who are younger than 21.
  let not21 = array.filter((person) => {
    return !canYouDrink(person.birthDate);
  });
  console.log(not21);
};

whosNot21(arrayOfPeople);

var a = new Array(6);
console.log(a.length); //prints "6"
console.log(a[0]); //prints "undefined"
console.log(a); //prints an array with 6 empty elements.

var b = new Array(1, 6);
console.log(b.length); //prints "2"
console.log(b[0]); //prints "1"
console.log(b); //prints an array with 2 elements "1" and "6"
