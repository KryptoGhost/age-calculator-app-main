let year = document.querySelector('.year');
let month= document.querySelector('.month');
let days = document.querySelector('.day');
let error = document.querySelector('.error');
const submit  = document.querySelector('.submit');
const yearage = document.querySelector('.span-year');
const monthage = document.querySelector('.span-month');
const daysage = document.querySelector('.span-days');
const cancel = document.querySelector('.cancel')
const cancelBtn = document.querySelector('.cancel-btn')



submit.addEventListener('click', function () {
    year = parseInt(year.value);
    month = parseInt (month.value);
    days = parseInt(days.value);

    let dob = new Date(year, month, days);
    let today = new Date();

    if (isNaN(dob) || dob > today || month < 0 || month > 11) {
        error.innerHTML = 'invalid date of birth';
        cancel.classList.add('show-cancel')
        return;
        //clearIt();
    }
    
    let isValid = (dob.getFullYear() === year && dob.getMonth() === month && dob.getDate() === days);
    if (!isValid) {
        error.innerHTML = 'invalid date of birth';
        cancel.classList.add('show-cancel')
        return;
       // clearIt();
    }

    let ageYear = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    yearage.textContent = ageYear;
    monthage.textContent = ageMonth;
    daysage.textContent = ageDays;

    clearIt();
});

function clearIt() {
    year.value = "";
    month.value = "";
    days.value = "";
}

cancelBtn.addEventListener('click', function() {
    cancel.classList.remove('show-cancel');
    preventDefault()
})