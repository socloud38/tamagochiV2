// var strings
let myname = '';

//autres buttons
let btnegg = document.getElementById('eggclick');

let eggcont1 = document.getElementById('eggcontent1');
let eggcont2 = document.getElementById('eggcontent2');
let eggcont3 = document.getElementById('txtegg');
let eggcont4 = document.getElementById('txtegg2');
let cslalerte = document.getElementById('console-alerte');

btnegg.addEventListener('click', function(event){
    eggcont1.style.display = 'inline-block';
    eggcont2.style.display = 'inline-block';
    eggcont3.style.display = 'none';
    eggcont4.style.display = 'none';
})

eggcont2.addEventListener('click', function(event){

    if(eggcont1.value)
    {
        myname = eggcont1.value;
        localStorage.setItem('name', myname.toString());
        eggcont1.value = '';
        window.location = 'game.html';
    }
    else 
    {
        let alertee = document.getElementById('my-span');
        alertee.innerText = 'Veuillez entrer un nom !';
    }
})

shrinktxt();

function shrinktxt()
{
    let shrinktxt = true;
    
    setInterval(() => {
    
        if(shrinktxt)
        {
            eggcont1.placeholder = '';
            shrinktxt = !shrinktxt;
            return shrinktxt;
        }
        if(!shrinktxt)
        {
            eggcont1.placeholder = 'Choisissez un nom !';
            shrinktxt = !shrinktxt;
            return shrinktxt;
        }
    
    }, 500);

}