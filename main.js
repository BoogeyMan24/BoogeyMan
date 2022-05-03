const backgroundNum = Math.floor(Math.random() * (11 - 1) + 1);
const typeString = ["c","r","e","d","i","t","s"];
let nextLetter = typeString[0];
let intLetter = 0;

window.onload = function(){
    console.log("Epic sus planet background credits: (Fengzi) Chinese Dora the explora or whatever this means: 疯子鸭")

    const background = document.getElementById('background');

    if(backgroundNum == 1)
    {
        background.style.setProperty('--background', "url('images/imposter.png')");
    }
    else if(backgroundNum >= 2)
    {
        background.style.setProperty('--background', "url('images/susplanet.png')");
    }
};

document.addEventListener('keydown', function(event) {
    if(event.key == nextLetter) {
        intLetter++;
        nextLetter = typeString[intLetter];
        if(intLetter >= 7)
        {
            location.href = 'credits.html';
            nextLetter = typeString[0];
            intLetter = 0;
        }
    }
    else
    {
        nextLetter = typeString[0];
        intLetter = 0;
    }
});