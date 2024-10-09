const formEl = document.querySelector('form')
const bigliettoel = document.querySelector('.biglietto')
console.log(bigliettoel);


formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    const travelerFirts = e.target.travelerFirstName.value
    const travelerLast = e.target.travelerLastName.value
    const kilometres = e.target.km.value;
    const age = e.target.age.value

    console.log(travelerFirts, kilometres, age);
    

    const price_at_kilometres = 0.21;
    let under_18 = price_at_kilometres * 80 / 100;
    let over_65 = price_at_kilometres * 60 / 100;
    let your_ticket;

    let yourData =
    `<div class="yourdata">        
    <h1 class="yourname">${travelerLast} ${travelerFirts}</h1>
        <div class="offerta">${age}</div>
        <div class="kmPercorsi">${kilometres}</div>
        <div class="price">${calcTicket(kilometres,age)}</div>
        </div>
        `
    
    bigliettoel.insertAdjacentHTML('beforeend', yourData)
})


function calcTicket( kilometres, age) {
    const price_at_kilometres = 0.21;
    let under_18 = price_at_kilometres * 80 / 100;
    let over_65 = price_at_kilometres * 60 / 100;
    let your_ticket;
    
    if (age =='minore'  ) {
        your_ticket = kilometres * under_18
        
         your_ticket;
        
    } else if (age == 'standard') {
        your_ticket = kilometres * price_at_kilometres
        
       
        
    } else {
        your_ticket = kilometres * over_65
        
        
    }
    return your_ticket.toFixed(2);
    
}




