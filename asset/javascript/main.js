let kilometres;
let age;
const price_at_kilometres = 0.21;
let under_18 = price_at_kilometres * 80 / 100;
let over_65 = price_at_kilometres * 60 / 100;
let your_ticket;
let message;

//Raccogliere dati

kilometres = Number(prompt('How many kilometres do you want to travel?'));
age = Number(prompt('How old are you?'));

// elaborazione dati

if ( age < 18 ){
    your_ticket = kilometres * under_18
    message = `You have ${age} years old, so you are under 18 and you will have to travel ${kilometres} kilometres.Your Ticket will cost ${your_ticket.toFixed(2)}`
} else if ( age >= 18 && age < 65 ){
    your_ticket = kilometres * price_at_kilometres
        message = `You have ${age} years old and you will have to travel ${kilometres} kilometres.Your Ticket will cost ${your_ticket.toFixed(2)}`
}else{
    your_ticket = kilometres * over_65
    message = `You have ${age} years old, so you are over 65 and you will have to travel ${kilometres} kilometres.Your Ticket will cost ${your_ticket.toFixed(2)}`
}
console.log(message);