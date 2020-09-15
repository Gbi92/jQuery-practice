let color = 'purple';
let number = 10;
let word = "cool";

if (color === 'purple'){
    $('.north').css({background:'purple'});
}

if (number > 100){
    $('.east').html("whoah, that's a big number");
} else {
    $('.east').html("just a regular number, please");
}

if (word === "cool"){
    $('.south').html("Power of DOM");
} else {
    $('.west').html("Power of DOM");
}