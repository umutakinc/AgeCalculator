const DATE = new Date();
const NOW_DAY = DATE.getDate();
const NOW_MONTH = DATE.getMonth() + 1;
const NOW_YEAR = DATE.getFullYear();

let inputs = document.querySelectorAll('input');


let calculateButton = document.querySelector('#calculateButton');

// Yıl inputunun max değerini şu anki yıl olarak ayarlayan fonksiyon
function changeYearNow() {
    let yearInput = document.getElementById('year');
    
    yearInput.max = NOW_YEAR;
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

    if (dayInputValue && monthInputValue && yearInputValue) {
        let resultDay = NOW_DAY - dayInputValue;
        let resultMonth = NOW_MONTH - monthInputValue;
        let resultYear = NOW_YEAR - yearInputValue;
        
        document.getElementById('resultYear').innerText = resultYear;
        document.getElementById('resultMonths').innerText = resultMonth;
        document.getElementById('resultDays').innerText = resultDay;
    }
});


changeYearNow();