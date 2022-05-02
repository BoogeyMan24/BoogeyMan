const backgroundNum = Math.floor(Math.random() * (3 - 1) + 1); // I’m adding .5 here so the flicker isn’t too obnoxious

console.log(backgroundNum);


const background = document.querySelector('body');

if(backgroundNum == 1)
{
    background.style.setProperty('background', "url('../images/amongus.png')");
}
else if(backgroundNum == 2)
{
    background.style.setProperty('background', "url('../images/susplanet.png')");
}