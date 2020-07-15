// var strings
let myname = '';

//autres buttons
let btnegg = document.getElementById('eggclick');

let eggcont1 = document.getElementById('eggcontent1');
let eggcont2 = document.getElementById('eggcontent2');
let eggcont3 = document.getElementById('txtegg');

btnegg.addEventListener('click', function(event){
    eggcont1.style.display = 'inline-block';
    eggcont2.style.display = 'inline-block';
    eggcont3.style.display = 'none';
})

eggcont2.addEventListener('click', function(event){

    myname = eggcont1.value;
    localStorage.setItem('name', myname.toString());
})