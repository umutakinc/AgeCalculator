const MOMENT = moment(); // Moment.js kütüphanesi tanımlandı

let inputs = document.querySelectorAll('input'); //İnputlar seçildi
let calculateButton = document.querySelector('#calculateButton');
let yearInput = document.getElementById('year');

// Yıl inputunun max değerini şu anki yıl olarak ayarlayan fonksiyon
function changeYearNow() {
    yearInput.max = MOMENT.year();
}

// Kullanıcı tarafından girilen değerlerin validasyon işlemini sağlayan fonksiyon
function validateInputs(element) {
    let numberInput = Number(element.value);
        
    if((numberInput >= element.min) && (numberInput <= element.max)) {
        element.classList.remove('fail');
        element.previousElementSibling.classList.remove('fail');
    } else {
        setTimeout(() => {
            element.value = "";
            element.classList.add('fail');
            element.previousElementSibling.classList.add('fail');
        }, 250)
    }
}

inputs.forEach(element => {
    element.addEventListener('input', function() {
        validateInputs(element);
    });
});

calculateButton.addEventListener("click", function() {
    let dayInputValue = document.querySelector('#day').value;
    let monthInputValue = document.querySelector('#month').value;
    let yearInputValue = document.querySelector('#year').value;

    let date = moment(`${dayInputValue}/${monthInputValue}/${yearInputValue}`, 'DD/MM/YYYY');
    let duration = moment.duration(MOMENT.diff(date));
    let years = duration.years();
    let months = duration.months();
    let days = duration.days();

    if (dayInputValue && monthInputValue && yearInputValue) {
        let resultDay = days;
        let resultMonth = months;
        let resultYear = years;
        
        document.querySelector('#resultYear').innerText = resultYear;
        document.querySelector('#resultMonths').innerText = resultMonth;
        document.querySelector('#resultDays').innerText = resultDay;
    }
});


changeYearNow();