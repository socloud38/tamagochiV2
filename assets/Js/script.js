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
let mytimer = 1000;

// var strings
let myname = localStorage.getItem('name');

//var bool
let pause = false;

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
    if (foodprcjauge <= 10 && foodprcjauge >= 0)
    {
        foodjauge.style.width = (foodprcjauge * 10) + '%';
        foodtxt.innerText = foodprcjauge * 10 + '%';
    }
}
function waterjaugesmanage()
{
    if (waterprcjauge <= 10 && waterprcjauge >= 0)
    {
        waterjauge.style.width = (waterprcjauge * 10) + '%';
        watertxt.innerText = waterprcjauge * 10 + '%';
    }
}
function fightjaugesmanage()
{
    if (fightprcjauge <= 10 && fightprcjauge >= 0)
    {
        fightjauge.style.width = (fightprcjauge * 10) + '%';
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
    if(!pause)
    {
        foodprcjauge--;
        foodjaugesmanage();
        defeat()
    }
}, mytimer * 2)
let watertimer = window.setInterval(function() {
    if(!pause)
    {
        waterprcjauge--;
        waterjaugesmanage();
        defeat()
    }
}, mytimer * 3)
let fighttimer = window.setInterval(function() {
    if(!pause)
    {
        fightprcjauge--;
        fightjaugesmanage();
        defeat()
    }
}, mytimer * 4)
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

//var bool si la console est allumé ou non
let consolestats = false;

//fonction qui gere les boutons et la console pour augmenter la valeur faim
function foodadd()
{
    if(!pause)
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

}

//bouton de faim
foodbtn.addEventListener('click', function(event){
    foodadd();
})

//fonction qui gere les boutons et la console pour augmenter la valeur de l'eau
function wateradd()
{
    if(!pause)
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
}

//bouton de soif
waterbtn.addEventListener('click', function(event){
    wateradd();
})

//fonction qui gere les boutons et la console pour augmenter la valeur fight
function fightadd()
{
    if(!pause)
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
}

//bouton de fight
fightbtn.addEventListener('click', function(event){
    fightadd();
})

//btn swap mode console et boutons
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
    // quand on appuye sur 'enter' dans l'input
    if(event.keyCode === 13){
        let inputvalue = inputcsl.value.toString();
        console.log(inputvalue);

        // si l'input est '/eat'
        if(inputvalue === '/eat')
        {
            foodadd();
            //si la barre de faim est au maximum
            if(foodprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = 'le ventre de votre mini-legend est plein';
                txtcsl.append(cmdtxt);
            }
            //sinon
            else
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/eat';
                txtcsl.append(cmdtxt);
            }
        }
        // si l'input est '/drink'
        else if(inputvalue === '/drink')
        {
            wateradd();
            //si la barre d'eau est au maximum
            if(waterprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = "Votre mini-legend n'a plus soif";
                txtcsl.append(cmdtxt);
            }
            //sinon
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/drink';
                txtcsl.append(cmdtxt);
            }
        }
        // si l'input est '/fight'
        else if(inputvalue === '/fight')
        {
            fightadd();
            //si la barre de fight est au maximum
            if(fightprcjauge >= 10)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = "votre mini-legend n'a plus envie de se battre";
                txtcsl.append(cmdtxt);
            }
            //sinon
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/fight';
                txtcsl.append(cmdtxt);
            }
        }
        //si l'input est '/help'
        else if (inputvalue === '/help')
        {
            let cmdtxt = document.createElement('p');
            cmdtxt.innerHTML = "<p>/eat pour manger !</p> <p>/drink pour boire !</p> <p>/fight pour se battre !</p><p> /godmod pour être invicible !</p>";
            txtcsl.append(cmdtxt);
        }
        // si l'input est '/godmod'
        else if(inputvalue === '/godmod')
        {
            pause = !pause;
            if(!pause)
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = "/godmod vous-n'etes plus invincible !";
                txtcsl.append(cmdtxt);
            }
            else 
            {
                let cmdtxt = document.createElement('p');
                cmdtxt.innerText = '/godmod vous-etes invincible !';
                txtcsl.append(cmdtxt);
            }
        }
        //si l'input ne correspond a aucune commandes du jeu
        else
        {
            let cmdtxt = document.createElement('p');
            cmdtxt.innerText = 'Command not found...';
            txtcsl.append(cmdtxt);
        }
    }
})
