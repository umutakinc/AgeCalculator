let inputs = document.querySelectorAll('input');
let yearInput = document.getElementById('year');
const NOW = new Date().getFullYear();

// Yıl inputunun max değerini şu anki yıl olarak ayarladım
yearInput.max = NOW;

inputs.forEach(element => {
    element.addEventListener('input', function() {
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
    });
});