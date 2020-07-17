// var de mes jauges de besoins
let foodjauge = document.getElementById('food-jge');
let waterjauge = document.getElementById('water-jge');
let fightjauge = document.getElementById('fight-jge');
let expjauge = document.getElementById('exp-jge');

// var de mes txt de jauges
let foodtxt = document.getElementById('textfood');
let watertxt = document.getElementById('textwater');
let fighttxt = document.getElementById('textfight');
let exptxt = document.getElementById('textexp');
let lvltxt = document.getElementById('lvltxt');

// pourcentage de mes jauge 10 -> 100%
let foodprcjauge = 10;
let waterprcjauge = 10;
let fightprcjauge = 10;
let expprcjauge = 8;

// var int
let levels = 0;
let evolve = 0;

// var strings
let myname = localStorage.getItem('name');

//var personnages
let mynametxt = document.getElementById('nametxt')
let mychar = document.getElementById('mycharr');
let mychar2 = document.getElementById('mycharr2');
let mychar3 = document.getElementById('mycharr3');
let mychar4 = document.getElementById('mycharr4');

// fonction manager des jauges
foodjaugesmanage();
waterjaugesmanage();
fightjaugesmanage();
expjaugmanage();

console.log(myname);
mynametxt.innerText = myname;

// fonctions qui test les pourcentages des jauges et gère les width en fonction
function foodjaugesmanage()
{
    if(foodprcjauge === 10)
    {
        foodjauge.style.width = 100 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 9)
    {
        foodjauge.style.width = 90 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 8)
    {
        foodjauge.style.width = 80 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 7)
    {
        foodjauge.style.width = 70 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 6)
    {
        foodjauge.style.width = 60 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 5)
    {
        foodjauge.style.width = 50 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 4)
    {
        foodjauge.style.width = 40 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 3)
    {
        foodjauge.style.width = 30 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 2)
    {
        foodjauge.style.width = 20 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge === 1)
    {
        foodjauge.style.width = 10 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
    else if(foodprcjauge == 0)
    {
        foodjauge.style.width = 0 + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
}
function waterjaugesmanage()
{
    if(waterprcjauge === 10)
    {
        waterjauge.style.width = 100 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 9)
    {
        waterjauge.style.width = 90 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 8)
    {
        waterjauge.style.width = 80 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 7)
    {
        waterjauge.style.width = 70 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 6)
    {
        waterjauge.style.width = 60 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 5)
    {
        waterjauge.style.width = 50 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 4)
    {
        waterjauge.style.width = 40 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 3)
    {
        waterjauge.style.width = 30 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 2)
    {
        waterjauge.style.width = 20 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge === 1)
    {
        waterjauge.style.width = 10 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
    else if(waterprcjauge == 0)
    {
        waterjauge.style.width = 0 + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
}
function fightjaugesmanage()
{
    if(fightprcjauge === 10)
    {
        fightjauge.style.width = 100 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 9)
    {
        fightjauge.style.width = 90 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 8)
    {
        fightjauge.style.width = 80 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 7)
    {
        fightjauge.style.width = 70 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 6)
    {
        fightjauge.style.width = 60 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 5)
    {
        fightjauge.style.width = 50 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 4)
    {
        fightjauge.style.width = 40 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 3)
    {
        fightjauge.style.width = 30 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 2)
    {
        fightjauge.style.width = 20 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge === 1)
    {
        fightjauge.style.width = 10 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
    else if(fightprcjauge == 0)
    {
        fightjauge.style.width = 0 + '%';
        fighttxt.innerText = fightprcjauge * 10 + '%';
    }
}
function expjaugmanage()
{
    if(expprcjauge === 10)
    {
        expjauge.style.width = 100 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 9)
    {
        expjauge.style.width = 90 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 8)
    {
        expjauge.style.width = 80 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 7)
    {
        expjauge.style.width = 70 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 6)
    {
        expjauge.style.width = 60 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 5)
    {
        expjauge.style.width = 50 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 4)
    {
        expjauge.style.width = 40 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 3)
    {
        expjauge.style.width = 30 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 2)
    {
        expjauge.style.width = 20 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 1)
    {
        expjauge.style.width = 10 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
    else if(expprcjauge === 0)
    {
        expjauge.style.width = 0 + '%';
        exptxt.innerText = 'XP : ' + expprcjauge * 10 + '%';
    }
}
// function qui test si les jauges sont vide pour définir la defaite du joueur
function defeat()
{
    if(foodprcjauge <= 0 && waterprcjauge <= 0 && fightprcjauge <= 0)
    {
        localStorage.setItem('evolve', evolve);
        window.location = 'defeat.html';
    }
}
// function qui test si la barre d'exp est pleine, si oui level up
function lvlup()
{
    lvltxt.innerText = 'Level :' + levels.toString();
    if(expprcjauge >= 10)
    {
        levels ++;
        expprcjauge = 0;
        expjauge.style.width = 0 + '%';
        exptxt.innerText = expprcjauge * 10 + '%';
        switch (levels) {
            case 1:
                mychar.hidden = true;
                mychar2.style.display = "inline-block";
                evolve = 1;
                break;
            case 5:
                mychar2.style.display = "none";
                mychar3.style.display = "inline-block";
                evolve = 2;
                break;
            case 10:
                mychar3.style.display = "none";
                mychar4.style.display = "inline-block";
                evolve = 3;
                break;
                    
            default:
                break;
        }
    }
}


// applique la baisse du pourcentage toute les "x" secondes
let foodtimer = window.setInterval(function() {
    foodprcjauge--;
    foodjaugesmanage();
    defeat()
}, 2000)
let watertimer = window.setInterval(function() {
    waterprcjauge--;
    waterjaugesmanage();
    defeat()
}, 3000)
let fighttimer = window.setInterval(function() {
    fightprcjauge--;
    fightjaugesmanage();
    defeat()
}, 4000)
// comme un Update() en C# (s'actualise toute les secondes)
let updatetimer = window.setInterval(function(){
    lvlup()
})

// var de mes boutons besoins
let foodbtn = document.getElementById('btn-food');
let waterbtn = document.getElementById('btn-water');
let fightbtn = document.getElementById('btn-fight');

//var console
let mybtnconsole = document.getElementById('btn-console');
//var div de ma console
let myconsole = document.getElementById('my-console');
//var content besoins
let besoinbtn = document.getElementById('content-besoins');

//var bool
let consolestats = false;

function foodadd()
{
    foodprcjauge ++;
    foodjaugesmanage();
    if(foodprcjauge > 10)
    {
        foodprcjauge = 10;
    }
    else if(foodprcjauge <= 0)
    {
        foodprcjauge = 0;
    }
    else if (foodprcjauge < 10 || foodprcjauge > 0 )
    {
        expprcjauge += 0.5;
        expjaugmanage();
    }
    if(expprcjauge > -1 && expprcjauge < 1)
    {
        exptxt.style.color = 'white';
    }
    else
    {
        exptxt.style.color = 'black';
    }

}
//event click augmente la jauge par les var prcjauges
foodbtn.addEventListener('click', function(event){
    foodadd();
})

function wateradd()
{
    waterprcjauge ++;
    waterjaugesmanage();
    if(waterprcjauge > 10)
    {
        waterprcjauge = 10;
    }
    else if(waterprcjauge <= 0)
    {
        waterprcjauge = 0;
    }
    else if (waterprcjauge < 10 || waterprcjauge > 0 )
    {
        expprcjauge += 0.5;
        expjaugmanage();
    }
    if(expprcjauge > -1 && expprcjauge < 1)
    {
        exptxt.style.color = 'white';
    }
    else
    {
        exptxt.style.color = 'black';
    }

}

waterbtn.addEventListener('click', function(event){
    wateradd();
})

function fightadd()
{
    fightprcjauge ++;
    fightjaugesmanage();
    if(fightprcjauge > 10)
    {
        fightprcjauge = 10;
    }
    else if(fightprcjauge <= 0)
    {
        fightprcjauge = 0;
    }
    else if (fightprcjauge < 10 || fightprcjauge > 0 )
    {
        expprcjauge += 0.5;
        expjaugmanage();
    }
    if(expprcjauge > -1 && expprcjauge < 1)
    {
        exptxt.style.color = 'white';
    }
    else
    {
        exptxt.style.color = 'black';
    }

}

fightbtn.addEventListener('click', function(event){
    fightadd();
})

mybtnconsole.addEventListener('click', function(event){

    if(consolestats === false)
    {
        besoinbtn.style.display = 'none';
        myconsole.style.display = 'inline-block';
        consolestats = !consolestats;
        mybtnconsole.innerText = 'Mode Boutons'
    }
    else if(consolestats === true)
    {
        besoinbtn.style.display = 'inline-block';
        myconsole.style.display = 'none';
        consolestats = !consolestats;
        mybtnconsole.innerText = 'Mode Console'
    }
})


//var du txt dans la console (commande déja tapé)
let txtcsl = document.getElementById('my-txt-console');

//var de l'input de la console
let inputcsl = document.getElementById('my-input-csl');
//event de l'input console
inputcsl.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        let inputvalue = inputcsl.value.toString();
        console.log(inputvalue);

        if(inputvalue === '/eat')
        {
            foodadd();
            if(foodprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = 'le ventre de votre mini-legend est plein';
                txtcsl.append(cmdtxt);
            }
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/eat';
                txtcsl.append(cmdtxt);
            }
        }
        else if(inputvalue === '/drink')
        {
            wateradd();
            if(waterprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = "Votre mini-legend n'a plus soif";
                txtcsl.append(cmdtxt);
            }
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/drink';
                txtcsl.append(cmdtxt);
            }
        }
        else if(inputvalue === '/fight')
        {
            fightadd();
            if(fightprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = "votre mini-legend n'a plus envie de se battre";
                txtcsl.append(cmdtxt);
            }
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/fight';
                txtcsl.append(cmdtxt);
            }
        }
        else if (inputvalue === '/help')
        {
            let cmdtxt = document.createElement('p');
            cmdtxt.innerHTML = "<p>/eat pour manger !</p> <p>/drink pour boire !</p> <p>/fight pour se battre !</p>";
            txtcsl.append(cmdtxt);
        }
        else
        {
            let cmdtxt = document.createElement('p');
            cmdtxt.innerText = 'Command not found...';
            txtcsl.append(cmdtxt);
        }
    }
})
