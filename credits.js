window.onload = function()
{
    const d = new Date();
    let expireDays = 5000;
    d.setTime(d.getTime() + (expireDays*1000*60*60*24));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "credits=yes; " + expires + "; path=/achievements.html";
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