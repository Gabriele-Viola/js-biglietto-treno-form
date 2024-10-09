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
    `                <div class="yourdata row ">
                    <div class="col-3">
                        <div class="sub-info">
                            <h3> Cognome e Nome</h3>
                            <p class="yourname">${travelerLast} ${travelerFirts}</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="sub-info">
                            <h3>Tipologia offerta</h3>
                            <div class="offerta">${age}</div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="sub-info">
                            <h3>Carrozza</h3>
                            <p>5</p>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="sub-info">
                            <h3>Codice CP</h3>
                            <p>9483</p>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="sub-info">
                            <h3>Costo biglietto</h3>
                            <div class="price"> € ${calcTicket(kilometres,age)}</div>
                        </div>
                    </div>




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




