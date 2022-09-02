// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// let sorted = false;
// function displayMovements(movements, sorted = false) {
//   const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements;

//   containerMovements.innerHTML = ''; // removing all the innerHTML before adding new ones.

//   // looping through the passed movement transactions and adding new HTML element.
//   movs.forEach((mov, i) => {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `<div class="movements__row">
//     <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//     <div class="movements__date">3 days ago</div>
//     <div class="movements__value">${mov}€</div>
//   </div>`;

//     // inserting the new HTML into the specified position
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// }

// // when the sort button is clicked then sort the movements of currentUser
// btnSort.addEventListener('click', () => {
//   // when the item is clicked change the sorted to unsorted and vice verse
//   sorted = !sorted;
//   displayMovements(currentUser.movements, sorted);
//   // catch the sort text element to show text based on the sorted item
//   const sortText = document.querySelector('.sort');
//   // if the movement already sorted then show a text to unsort else show a text to sort
//   sorted ? (sortText.textContent = 'UNSORT') : (sortText.textContent = 'SORT');
// });
// // displayMovements(account1.movements);

// // split the name based on the whitespace
// // create a new array with only first letter from splited name
// // join the array of first letter create using map

// function createUserName(name) {
//   const userName = name
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return userName;
// }

// /*
// passing the list of accounts
// looping through each account and adding username properties in each account

// */
// const addUserName = accs => {
//   accs.forEach(acc => {
//     acc.userName = createUserName(acc.owner);
//   });
// };

// addUserName(accounts);
// // console.log(accounts);
// // console.log(createUserName('nischal puri thapa'));

// // const deposits = movements.filter(mov => mov > 0);
// // const withdrawal = movements.filter(mov => mov < 0);

// // console.log(deposits);
// // console.log(withdrawal);

// // const maxMov = movements.reduce((acc, mov) => {
// //   if (acc > mov) return acc;
// //   return mov;
// // });

// // console.log(maxMov);

// const calcDisplaySummary = account => {
//   const incomes = account.movements
//     .filter(mov => mov >= 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = incomes + '€';

//   const outgoings = account.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = Math.abs(outgoings) + '€';

//   const interest = account.movements
//     .filter(mov => mov >= 0)
//     .map(deposite => (deposite * account.interestRate) / 100)
//     .filter(int => int >= 1)
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = interest + '€';
// };

// // calcDisplaySummary(movements);

// const calcDisplayBalance = account => {
//   // after calculating the main balance of a given account add new balance properties or update it with the total sum of movements.
//   account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = account.balance + '€';
// };

// let currentUser;

// // console.log(currentUser);

// const updateUI = account => {
//   // update balance
//   calcDisplayBalance(account);
//   // update Movements
//   displayMovements(account.movements);

//   // update summary
//   calcDisplaySummary(account);
// };

// // when user input userName and pin and click the login button
// btnLogin.addEventListener('click', event => {
//   event.preventDefault(); // since login userName and pin field is form to prevent submit and reload page preventing from default event action.

//   //getting currentUser based on the login userName
//   currentUser = accounts.find(
//     account => account.userName === inputLoginUsername.value
//   );

//   if (currentUser?.pin === Number(inputLoginPin.value)) {
//     // update UI and message
//     // setting the welcome message as user logged in
//     labelWelcome.textContent = `Welcome, ${currentUser.owner.split(' ')[0]}`;

//     inputLoginPin.value = inputLoginUsername.value = ''; // remove the input value after login
//     inputLoginUsername.blur(); // remove the focus if there are any

//     containerApp.style.opacity = 1;

//     updateUI(currentUser);
//     console.log(accounts);
//   } else {
//     alert('Invalid userName or Password');
//   }
// });

// /// tansfer money to other valid Account

// btnTransfer.addEventListener('click', e => {
//   e.preventDefault();

//   const transferAmount = Number(inputTransferAmount.value);
//   const recieverAcc = accounts.find(
//     acc => acc.userName === inputTransferTo.value
//   );

//   // once the transfer button is click erase the input field values
//   inputTransferTo.value = inputTransferAmount.value = '';

//   // console.log(recieverAcc);

//   // update sender and reciever accounts' movements
//   // check if the amount is non negative value
//   // check if receiveraccount and not the same as currentAcc
//   // check if the currentUser balance is enough to make a transactions
//   if (
//     transferAmount > 0 &&
//     recieverAcc &&
//     currentUser.balance >= transferAmount &&
//     recieverAcc?.userName !== currentUser.userName
//   ) {
//     currentUser.movements.push(-transferAmount);
//     recieverAcc.movements.push(transferAmount);
//     updateUI(currentUser);
//   }
// });

// btnLoan.addEventListener('click', e => {
//   e.preventDefault();

//   // gettin the requested loan amount
//   const amount = Number(inputLoanAmount.value);
//   console.log(amount);
//   // check if the amount is valid
//   // check if the requested amount is more that of 20% of any deposite amount
//   if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.2)) {
//     console.log('pased');
//     // debugger;
//     currentUser.movements.push(amount);
//     inputLoanAmount.value = '';
//     updateUI(currentUser);
//   } else {
//     alert(
//       `Sorry, You don't have any transactions of atleast 20% of your requested loan amount!!`
//     );
//   }
// });

// btnClose.addEventListener('click', e => {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentUser.userName &&
//     Number(inputClosePin.value) === currentUser.pin
//   ) {
//     // get the index no. of current acount.
//     const accIndex = accounts.findIndex((account, index, array) => {
//       console.log(array);
//       return account.userName == inputCloseUsername.value;
//     });

//     accounts.splice(accIndex, 1); // remove the current account data from the accounts array
//     inputCloseUsername.value = inputClosePin.value = '';
//     containerApp.style.opacity = 0;
//   } else {
//     alert('Current UserName or Pin is Invalid!!');
//   }
// });

// const totalMovmentTransaction = accounts
//   .flatMap(account => account.movements)
//   .reduce((acc, mov) => {
//     return acc + mov;
//   }, 0);
// // const totalMovmentTransaction = accounts
// //   .map(account => account.movements)
// //   .flat()
// //   .reduce((acc, mov) => {
// //     return acc + mov;
// //   }, 0);

// console.log(totalMovmentTransaction);

/* ======================= NUMBER, DATE, AND TIMES ================ */
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2022-09-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

// const convertDate = (date1, date2) => date2 - date1;
// console.log(convertDate('2019-11-01T13:15:33.035Z', new Date()));
// console.log(Date.now());

const formatePassedDate = passedDate => {
  const movDate = new Date(passedDate);
  const calPassedDays = passDated =>
    Math.abs(
      Math.trunc((new Date() - new Date(passDated)) / (1000 * 3600 * 24))
    );

  const dayPassed = calPassedDays(passedDate);

  const day = `${movDate.getDay()}`.padStart(2, 0);
  const month = `${movDate.getMonth() + 1}`.padStart(2, 0);
  const year = movDate.getFullYear();
  const formatMovDate = `${day}/${month}/${year}`;

  if (dayPassed === 0) return 'TODAY';
  if (dayPassed === 1) return 'YESTERDAY';

  if (dayPassed <= 7) return `${formatMovDate} DAYS AGO`;
  return formatMovDate;
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const movDate = account.movementsDates[i];

    // const day = `${movDate.getDay()}`.padStart(2, 0);
    // const month = `${movDate.getMonth() + 1}`.padStart(2, 0);
    // const year = movDate.getFullYear();

    // const daysPassed = calPassedDays(movDate);
    // const formatMovDate = `${day}/${month}/${year}, ${daysPassed} ${
    //   daysPassed > 9 ? 'days' : 'day'
    // } to ago`;
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const movformatDate = formatePassedDate(movDate);
    console.log(movformatDate);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${movformatDate}</div>
        <div class="movements__value">${Math.abs(mov).toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    const tranDate = new Date();
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(tranDate);
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(tranDate);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    const tranDate = new Date();
    currentAccount.movementsDates.push(tranDate);
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currentDate = () => {
  const nowDate = new Date();

  const day = `${nowDate.getDay()}`.padStart(2, 0);
  const month = `${nowDate.getMonth() + 1}`.padStart(2, 0);
  const year = nowDate.getFullYear();
  const hours = `${nowDate.getHours()}`.padStart(2, 0);
  const seconds = `${nowDate.getSeconds()}`.padStart(2, 0);

  const formatDate = `${day}/${month}/${year}, ${hours}:${seconds}`;
  labelDate.textContent = formatDate;
  return formatDate;
};
console.log(currentDate());
