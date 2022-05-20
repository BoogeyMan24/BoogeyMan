let achList = ["credits", "imposter", "evil", "discord"];
let achAchieved = 0;

window.onload = function()
{
    for(var i = 0; i < achList.length; i++)
    {
        let gotAch = getCookie(achList[i]);
        if(gotAch == "yes")
        {
            let prevText = document.getElementById(achList[i]).innerHTML;
            document.getElementById(achList[i]).innerHTML = prevText + gotAch;
            achAchieved++;
        }
        if(gotAch == "")
        {
            let prevText = document.getElementById(achList[i]).innerHTML;
            document.getElementById(achList[i]).innerHTML = prevText + "no";
        }
    }
    let prevText = document.getElementById("percentage").innerHTML;
    document.getElementById("percentage").innerHTML = prevText + `${achAchieved / achList.length * 100}% (${achAchieved}/${achList.length})`;
}


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
    return "";
}

function clearAchievements()
{
    for(var i = 0; i < achList.length; i++)
    {
        let gotAch = getCookie(achList[i]);
        document.cookie = `${achList[i]}=; expires=Tue, 7 Aug 2007 12:00:00 UTC; path=/achievements.html`;
        location.reload();
    }
}

function getAchievement(password, achName)
{
    if(password == "LMAOAMONGUSSUS")
    {
        
    }
}