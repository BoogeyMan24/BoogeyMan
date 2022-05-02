const backgroundNum = Math.floor(Math.random() * (11 - 1) + 1); // I’m adding .5 here so the flicker isn’t too obnoxious
console.log(backgroundNum);

window.onload = function(){
    const background = document.getElementById('background');

    console.log(background)

    if(backgroundNum == 1)
    {
        background.style.setProperty('--background', "url('BoogeyMan24/images/imposter.png')");
    }
    else if(backgroundNum >= 2)
    {
        background.style.setProperty('--background', "url('BoogeyMan24/images/susplanet.png')");
    }
};
