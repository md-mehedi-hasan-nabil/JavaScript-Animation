const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = 0;
setInterval(() => {
    const newDiv = document.createElement('div');
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(newDiv);
    newDiv.className = "first";
    newDiv.style.left = (randomNum(1, 690)*2) + "px";
    count++;
    
    if (count > 4) {
        const id = document.getElementsByClassName('first')[0];
        id.remove();
    }
    console.log(count);
},500);