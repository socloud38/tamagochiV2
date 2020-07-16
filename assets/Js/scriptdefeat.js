let char = JSON.parse(localStorage.getItem('evolve'));

let charimg1 = document.getElementById('mycharr2');
let charimg2 = document.getElementById('mycharr3');
let charimg3 = document.getElementById('mycharr4');

if(char === 2)
{
    charimg1.style.display = 'none';
    charimg2.style.display = 'inline-block';
    console.log(char);
}
else if(char === 3)
{
    charimg1.style.display = 'none';
    charimg3.style.display = 'inline-block';
    console.log(char);

}