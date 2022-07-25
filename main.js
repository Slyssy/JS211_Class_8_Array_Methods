const modal = document.querySelector('.modal');
const displayResults = document.querySelector('.display-results');
const displayResultsTitle = document.querySelector('.display-results-title');
//$ Use a do...while loop to console.log the numbers from 1 to 1000.
const doWhile = () => {
  let result = '';
  let num = 0;
  do {
    num = num + 1;
    result = `${result + num}, `;
  } while (num < 1000);

  modal.classList.add('active');
  displayResults.innerHTML = '';
  displayResults.insertAdjacentHTML(
    'afterbegin',
    `
    <h2>Counting from 1 to 1,000 using a Do-While Loop.</h2>
  <p class="do-while-result">${result}</p>
  `
  );
};

// $ Create an object (with keys and values) called person with the following data:
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female',
};

// $ Create a function that logs out the keys of the object using Object.keys().
const printKeys = (object) => {
  let str = '';
  const keys = Object.keys(object);
  keys.forEach((key) => {
    str += `
    <p class="object-keys-result">${key}</p>
    `;
  });
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the Object.keys() method.</h2>
  <h6>Object.keys() returns an array of keys. We then loop through those keys to log them.</h6>`
  );
  displayResults.innerHTML = str;
};

// $ Create a function that logs out the keys and values of the object using Object.entries().

const printKeysAndValues = (object) => {
  let str = '';
  const entries = Object.entries(object);
  entries.forEach((entry) => {
    const [key, value] = entry;
    // console.log(`${key}: ${value}`);
    str += `
    <p class="object-keys-result">${key}: ${value}</p>
    `;
  });
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the Object.entries() method.</h2>
  <h6>Object.entries() returns an array of keys and values of an object. We then loop through that array and use destructuring to assign them to a variable. We can use those variables to log them.</h6>`
  );
  displayResults.innerHTML = str;
};

// printKeysAndValues(person);

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
const mary = new Person('Mary', 'Lyssy', 'November 11, 1948', 'female');
const kristin = new Person('Lane', 'Purcel', 'December 20, 2007', 'male');
const dan = new Person('Dan', 'Payne', 'July 2, 1978', 'male');
const john = new Person('John', 'Struve', 'June 27, 2015', 'male');
const kayla = new Person('Kayla', 'Purcel', 'September 27, 1996', 'female');

const arrayOfPeople = [leah, mary, kristin, dan, john, kayla];
// console.log(arrayOfPeople);

// $Create a function that uses a for...of loop and an if statement to
// $console.log the value associated with the key birthDate of each object if
// $the birth year is an odd number.
const oddYear = (array) => {
  let str = '';
  for (const item of array) {
    let birthYear = item.birthDate.slice(-4);
    if (birthYear % 2 === 1) {
      str += `${item.firstName} ${item.lastName} was born in ${birthYear} which is an odd number year. <br>`;
    }
    modal.classList.add('active');
    displayResultsTitle.innerHTML = '';
    displayResultsTitle.insertAdjacentHTML(
      'afterbegin',
      `
  <h2>Using a For of Loop and a if statement.</h2>
  <h6>Looping through the array of objects using a for of loop. On each iteration, we isolate the birth date value and slice the last 4 characters to get the birth year. If that year has a remainder of 1 after dividing it by two, it is an odd year.</h6>`
    );
    displayResults.innerHTML = str;
  }
};
// oddYear(arrayOfPeople);

// $Use .map() to map over the arrayOfPersons and console.log() their
// $information.
const personInfo = (array) => {
  let str = '';
  array.map((item, index) => {
    str += `Person ${index + 1}: ${item.firstName} ${
      item.lastName
    } is a ${item.gender.toUpperCase()} born on ${item.birthDate} <br>`;
  });
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the .map() method.</h2>
  <h6>Here we are using the .map() method to iterate over the personsArray. With each iteration we grab the entire object and the index. We use the index to track the record, and we display the values of the object by traversing the object using dot notation and wrapping it all in a template literal.</h6>`
  );
  displayResults.innerHTML = str;
};

// $Use .filter() to filter the persons array and console.log Only males in the
// $array.
const onlyMales = (array) => {
  let str = '';
  const males = array.filter((person, index) => {
    return person.gender === 'male';
  });
  str = JSON.stringify(males);
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the .filter() method.</h2>
  <h6>Here we are using the .filter() method to iterate over the personsArray. 
  Each time we loop over the array, we filter out only the objects where the gender key value is equal to male.
  </h6>`
  );
  displayResults.innerHTML = str;
};

// $Create a function that returns true if the value of birthDate is before Jan
// $1, 1990.
const bornBefore1990 = (array) => {
  let str = '';
  array.forEach((person) => {
    // *Setting variables for dates that have been converted to time stamps.
    let testDate = new Date('January 1, 1990').getTime();
    let birthDate = new Date(person.birthDate).getTime();
    str +=
      // *Comparing each person's birth date against the test date.
      `${person.firstName} born before 1990? ${+birthDate < +testDate}<br>`;
  });
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the .map() method.</h2>
  <h6>Here we are using the .forEach() method to iterate over the personsArray. We set variables for the test date which is January 1st, 1990, and the we set a variable for the persons birth date for each person as we iterate over the array. Each time we iterate over the array, we run a truthy statement to confirm whether or not someone was born before 1990.</h6>`
  );
  displayResults.innerHTML = str;
};

// $Use .filter() to filter the persons array and console.log only people that
// $were born before Jan 1, 1990.
bornBefore1990Filter = (array) => {
  const bornBefore1990 = array.filter((person) => {
    let testDate = new Date('January 1, 1990').getTime();
    let birthDate = new Date(person.birthDate).getTime();
    // *The bornBefore1990 array will on consist of those people whose birth
    // *date is less than the test date.
    return +birthDate < testDate;
  });
  str = JSON.stringify(bornBefore1990);
  modal.classList.add('active');
  displayResultsTitle.innerHTML = '';
  displayResultsTitle.insertAdjacentHTML(
    'afterbegin',
    `
  <h2>Using the .filter() method.</h2>
  <h6>Here we are using the .filter() method to iterate over the personsArray. 
  Each time we loop over the array, we filter out only the objects where the gender key value is equal to male.
  </h6>`
  );
  displayResults.innerHTML = str;
};
console.log('----------Bonus Question 1 Results----------');
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
  console.log('----------Bonus Question 2 Results ----------');

  console.log(not21);
};

whosNot21(arrayOfPeople);

// # Start Event Handler Functions
const doWhileButton = document.querySelector('.do-while-button');
const closeModalButton = document.querySelector('.close-modal');
const objectKeysButton = document.querySelector('.object-keys-button');
const objectEntriesButton = document.querySelector('.object-entries-button');
const forOfLoopButton = document.querySelector('.for-of-loop-button');
const personInfoButton = document.querySelector('.person-info-button');
const onlyMalesButton = document.querySelector('.only-males-button');
const bornBefore1990Button = document.querySelector('.born-before-1990-button');
const bornBefore1990FilterButton = document.querySelector(
  '.born-before-1990-filter-button'
);

doWhileButton.addEventListener('click', doWhile);
closeModalButton.addEventListener('click', () => {
  modal.classList.remove('active');
});

objectKeysButton.addEventListener('click', () => printKeys(person));
objectEntriesButton.addEventListener('click', () => printKeysAndValues(person));
forOfLoopButton.addEventListener('click', () => oddYear(arrayOfPeople));
personInfoButton.addEventListener('click', () => personInfo(arrayOfPeople));
onlyMalesButton.addEventListener('click', () => onlyMales(arrayOfPeople));
bornBefore1990Button.addEventListener('click', () =>
  bornBefore1990(arrayOfPeople)
);
bornBefore1990FilterButton.addEventListener('click', () =>
  bornBefore1990Filter(arrayOfPeople)
);
