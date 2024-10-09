const formEl = document.querySelector('form')
const bigliettoel = document.querySelector('.biglietto')
console.log(bigliettoel);


formEl.addEventListener('submit', function (e) {
    e.preventDefault()



    const travelerName = e.target.traveler.value
    const kilometres = e.target.km.value;
    const age = e.target.age.value

    const price_at_kilometres = 0.21;
    let under_18 = price_at_kilometres * 80 / 100;
    let over_65 = price_at_kilometres * 60 / 100;
    let your_ticket;

    const yourData =
    `<div class="yourdata">        
    <h1 class="yourname">${travelerName}</h1>
        <div class="offerta">${age}</div>
        <div class="kmPercorsi">${kilometres}</div>
        </div>
        `

    bigliettoel.insertAdjacentElement('beforeend', yourData)

    // if (age >= 18 && age < 65) {
    //     your_ticket = kilometres * under_18
        
    // } else if (age < 18) {
    //     your_ticket = kilometres * price_at_kilometres

    // } else {
    //     your_ticket = kilometres * over_65
    // }
    // console.log(message);







})






//Raccogliere dati

// kilometres = Number(prompt('How many kilometres do you want to travel?'));
// age = Number(prompt('How old are you?'));

// elaborazione dati
