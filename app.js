let year = document.querySelector('.year');
let month= document.querySelector('.month');
let days = document.querySelector('.day');
const yearage = document.querySelector('.span-year');
const monthage = document.querySelector('.span-month');
const daysage = document.querySelector('.span-days');
const cancel = document.querySelector('.cancel');
const submit  = document.querySelector('.submit');



submit.addEventListener('click', function () {
    year = parseInt(year.value);
    month = parseInt (month.value);
    days = parseInt(days.value);

    let dob = new Date(year, month, days);
    let today = new Date();

    if (isNaN(dob) || dob > today || month < 0 || month > 11) {
        yearage.innerHTML = 'invalid';
        monthage.innerHTML = 'invalid';
        daysage.innerHTML = 'invalid';
        return
    }
    
    let isValid = (dob.getFullYear() === year && dob.getMonth() === month && dob.getDate() === days);
    if (!isValid) {
        yearage.innerHTML = 'invalid';
        monthage.innerHTML = 'invalid';
        daysage.innerHTML = 'invalid';
        return;
  
    }

    let ageYear = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    yearage.textContent = ageYear;
    monthage.textContent = ageMonth;
    daysage.textContent = ageDays;

    if (ageMonth < 0 || (ageMonth === 0 && ageDays < 0)) {
        ageYear--;
        ageMonth += 12;
    }

    if (ageDays < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += lastMonth.getDate();
        ageMonth--;
    }

    clearIt();
});

function clearIt() {
    year.value = "";
    month.value = "";
    days.value = "";
}

