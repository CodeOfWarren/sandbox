
const parText = document.querySelector('.par');
console.log(parText.textContent);


//IF ELSE

let ShopingDone =  true,
    childAllwonce;

if (ShopingDone === true ) {
    childAllwonce = 10; 
} else {
    childAllwonce = 5;
}

console.log(childAllwonce)
parText.textContent = childAllwonce;


// const ans = confirm(`Is the shopping done?`);

// if (ans) {
//     parText.textContent = `yes it is done`;

// } else {
//     parText.textContent = `no it's not`;
// }


//IF ELSE IF

const weatherChoice = document.querySelector('select');
const para = document.querySelector('.weatherPara');

///trigger
weatherChoice.addEventListener('change', chooseWeather);

function chooseWeather() {

    if (weatherChoice.value=="sunny") {
        para.textContent = "It is sunny";
    } else {
        para.textContent = "it is not";
    }
}
