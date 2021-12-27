const simple = document.querySelector("#simple");
const hex = document.querySelector("#hex");
const wrapper = document.querySelector("main");
const colorName = document.querySelector("span");
const button = document.querySelector('button');

let isHexActive = false;
let isSimpleActive = true;
const simpleColor = ['pink', 'red', 'lightBlue', 'salmon', 'green', 'yellow', 'orange'];

simple.addEventListener("click", function(){
    simple.classList.add('active');
    hex.classList.remove('active')
    isSimpleActive = true;
    isHexActive = false;
});

hex.addEventListener('click', function(){
    hex.classList.add('active');
    simple.classList.remove('active');
    isHexActive = true;
    isSimpleActive =false;
});

function handleClick(){
    if(isSimpleActive===true){
    const randomIndex = Math.floor((Math.random() * simpleColor.length));
    const color = simpleColor[randomIndex];
    colorName.innerText = " " + color;
    wrapper.style.backgroundColor = color;
    }else if(isHexActive ===true){
        const randomColor = '#'+Math.floor(Math.random() * 16777215).toString(16);
        colorName.innerText = " " + randomColor;
        wrapper.style.backgroundColor = randomColor;
    }
    
}
button.addEventListener("click", handleClick)