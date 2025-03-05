/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const numbers = document.querySelectorAll('.number')
const show = document.querySelector('.display')
const equal = document.querySelector('.equals')
const operation = document.querySelectorAll('operator')



/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });
//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        show.textContent = number.textContent
    })
})

if (event.target.classList.contains('equals')) {
    console.log()
}


/*-------------------------------- Functions --------------------------------*/
