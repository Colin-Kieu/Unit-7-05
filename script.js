let age = 0
let day = 0
// sets our variables to 0
document.getElementById('button').addEventListener('click', action)
// connects our button to the function
function action () {
  age = document.getElementById('input1').value
  age = parseInt(age)
  day = document.getElementById('input2').value
  // this will store the values given from the inputs
  if ((age <= 18) && (day === 'saturday' || day === 'sunday')) {
    document.getElementById('answer').innerHTML = 'Relax, its the weekend!'
  } else if ((age <= 18) && (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday')) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else if ((age >= 18) && (day === 'saturday' || day === 'sunday')) {
    document.getElementById('answer').innerHTML = 'Relax, its the weekend!'
  } else if ((age >= 18) && (day !== 'saturday' || day !== 'sunday')) {
    document.getElementById('answer').innerHTML = 'Time for Work!'
  }

}