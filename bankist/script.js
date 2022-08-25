'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

function displayMovements(movements) {
  // const type =

  containerMovements.innerHTML = ''; // removing all the innerHTML before adding new ones.

  // looping through the passed movement transactions and adding new HTML element.
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    // inserting the new HTML into the specified position
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// displayMovements(account1.movements);

// split the name based on the whitespace
// create a new array with only first letter from splited name
// join the array of first letter create using map

function createUserName(name) {
  const userName = name
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return userName;
}

/*
passing the list of accounts
looping through each account and adding username properties in each account



*/
const addUserName = accs => {
  accs.forEach(acc => {
    acc.userName = createUserName(acc.owner);
  });
};

addUserName(accounts);
// console.log(accounts);
// console.log(createUserName('nischal puri thapa'));

// const deposits = movements.filter(mov => mov > 0);
// const withdrawal = movements.filter(mov => mov < 0);

// console.log(deposits);
// console.log(withdrawal);

// const maxMov = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   return mov;
// });

// console.log(maxMov);

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const outgoings = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(outgoings) + '€';

  const interest = account.movements
    .filter(mov => mov >= 0)
    .map(deposite => (deposite * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest + '€';
};

// calcDisplaySummary(movements);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = balance + '€';
};

let currentUser;

// console.log(currentUser);

// when user input userName and pin and click the login button
btnLogin.addEventListener('click', event => {
  event.preventDefault(); // since login userName and pin field is form to prevent submit and reload page preventing from default event action.

  //getting currentUser based on the login userName
  currentUser = accounts.find(
    account => account.userName === inputLoginUsername.value
  );

  if (currentUser?.pin === Number(inputLoginPin.value)) {
    // update UI and message
    // setting the welcome message as user logged in
    labelWelcome.textContent = `Welcome, ${currentUser.owner.split(' ')[0]}`;

    inputLoginPin.value = inputLoginUsername.value = ''; // remove the input value after login
    inputLoginUsername.blur(); // remove the focus if there are any

    containerApp.style.opacity = 1;

    // update balance
    calcDisplayBalance(currentUser.movements);
    // update Movements
    displayMovements(currentUser.movements);

    // update summary
    calcDisplaySummary(currentUser);
    console.log(accounts);
  } else {
    alert('Invalid userName or Password');
  }
});
