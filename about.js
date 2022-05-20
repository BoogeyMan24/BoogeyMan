window.onload = function()
{
    let github = document.getElementById("github");
    let discord = document.getElementById("discord");

    github.addEventListener("mouseover", function(event)
    {
        let backgroundNum = Math.floor(Math.random() * (101 - 1) + 1);
        if(backgroundNum == 1)
        {
            event.target.style.backgroundImage = "url('svg/github-evil.svg')";
            const d = new Date();
            let expireDays = 5000;
            d.setTime(d.getTime() + (expireDays*1000*60*60*24));
            let expires = "expires="+ d.toUTCString();
            document.cookie = "evil=yes; " + expires + "; path=/achievements.html";
        }
        else if(backgroundNum > 1)
        {
            event.target.style.backgroundImage = "url('svg/github-white.svg')";
        }
    })

    github.addEventListener("mouseleave", function(event)
    {
        event.target.style.backgroundImage = "url('svg/github-black.svg')";
    })

    discord.addEventListener("mouseover", function(event)
    {
        event.target.style.backgroundImage = "url('svg/discord-blurple.svg')";
    })

    discord.addEventListener("mouseleave", function(event)
    {
        event.target.style.backgroundImage = "url('svg/discord-black.svg')";
    })

    const background = document.getElementById('background');
    const discordText = document.getElementById('background');

    var timeoutId;
    $("#discord").hover(function() {
        if (!timeoutId) {
            timeoutId = window.setTimeout(function() {
                timeoutId = null;
                background.style.setProperty('--background', "url('images/discord-background.jpg')");
                const d = new Date();
                let expireDays = 5000;
                d.setTime(d.getTime() + (expireDays*1000*60*60*24));
                let expires = "expires="+ d.toUTCString();
                document.cookie = "discord=yes; " + expires + "; path=/achievements.html";
            }, 1000 * 60 * 10);
        }
    },
    function () {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            timeoutId = null;
        }
        else {
            background.style.setProperty('--background', "url('images/susplanet.png')");
        }
    });
}

document.addEventListener('keydown', function(event) {
    if(event.key == "1") {
        document.documentElement.style.setProperty("--speed-underline", "0.1s");
    }
    if(event.key == "2") {
        document.documentElement.style.setProperty("--speed-underline", "0.2s");
    }   
    if(event.key == "3") {
        document.documentElement.style.setProperty("--speed-underline", "0.3s");
    }
    if(event.key == "4") {
        document.documentElement.style.setProperty("--speed-underline", "0.4s");
    }
    if(event.key == "5") {
        document.documentElement.style.setProperty("--speed-underline", "0.5s");
    }   
    if(event.key == "6") {
        document.documentElement.style.setProperty("--speed-underline", "0.6s");
    }
    if(event.key == "7") {
        document.documentElement.style.setProperty("--speed-underline", "0.7s");
    }   
    if(event.key == "8") {
        document.documentElement.style.setProperty("--speed-underline", "0.8s");
    }
    if(event.key == "9") {
        document.documentElement.style.setProperty("--speed-underline", "0.9s");
    }   
});

function copyDiscord()
{
    navigator.clipboard.writeText("BoogeyMan#6398");
    alert("Discord username and tag saved to clipboard: BoogeyMan#6398");
}

function gotoGithub()
{
    window.location.href = "https://github.com/BoogeyMan24";
}

// function copyMinecraft()
// {
//     navigator.clipboard.writeText("BoogeyMan24");
//     alert("Minecraft user saved to clipboard: BoogeyMan24");
// }