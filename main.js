const backgroundNum = Math.floor(Math.random() * (11 - 1) + 1);
const typeString = ["c","r","e","d","i","t","s"];
let nextLetter = typeString[0];
let intLetter = 0;


window.onload = function(){
    console.log("Credits: ");
    console.log("credits for no reason: 疯子鸭 (Fengzi)");
    console.log('credits for some reason: VRUM VRUM CAR (IAMACAR) backwords "live" github (evil github)')
    console.log("Known bugs: about me bad resoponsiveness on firefox, mobile bad design about me page");
    console.log("Current Task: polishing about me/mobile/firefox bugs.");

    const background = document.getElementById('background');

    if(backgroundNum == 1)
    {
        background.style.setProperty('--background', "url('images/imposter.png')");
        const d = new Date();
        let expireDays = 5000;
        d.setTime(d.getTime() + (expireDays*1000*60*60*24));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "imposter=yes; " + expires + "; path=/achievements.html";
    }
    else if(backgroundNum >= 2)
    {
        background.style.setProperty('--background', "url('images/susplanet.png')");
    }

    let amongusText = document.getElementById("amongus-text");
    let amongus = document.getElementById("amongus");

    amongus.addEventListener("mouseenter", function(event)
    {
        let textNum = Math.floor(Math.random() * (3 - 1) + 1);
        if(textNum == 1)
        {
            amongusText.innerHTML = "Type 'credits'!";
        }
        else if(textNum > 1)
        {
            amongusText.innerHTML = "Check Console!";
        }
    })
};

document.addEventListener('keydown', function(event) {
    if(event.key == nextLetter) {
        intLetter++;
        nextLetter = typeString[intLetter];
        if(intLetter >= typeString.length)
        {
            location.href = 'credits.html';
            nextLetter = typeString[0];
            intLetter = 0;
        }
    }
    else if(event.key == typeString[0])
    {
        nextLetter = typeString[1];
        intLetter = 1;
    }
    else
    {
        nextLetter = typeString[0];
        intLetter = 0;
    }
});


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "no cookie";
}