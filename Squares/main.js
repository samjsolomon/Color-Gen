const button = document.querySelector('.generate');
const colour = document.querySelector('.colour');
const colour2 = document.querySelector('.colour2');
const colour3 = document.querySelector('.colour3');

button.addEventListener('click', setColour);
colour.addEventListener('click', copy);

function setColour () {
 let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 let randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
 let randomColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);

 document.getElementById("color1").style.backgroundColor = randomColor;
 colour.innerText = randomColor;

 document.getElementById("color2").style.backgroundColor = randomColor2;
 colour2.innerText = randomColor2;

 document.getElementById("color3").style.backgroundColor = randomColor3;
 colour3.innerText = randomColor3;

}

function copy () {
 let text = color.innerText;
 let input = document.createElement('input');
 input.setAttribute('value', text);
 document.body.appendChild(input);
 input.select();
 
 document.execCommand('copy');
 document.body.removeChild(input);
 
 alert('Copied: ' + text);
}