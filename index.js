homeresel= document.getElementById("homeres")
awayresel= document.getElementById("awayres")
let homeres=0
let awayres=0
function incrementhome(n)
{
    homeres +=n
    homeresel.innerText=homeres
}
function incrementaway(n)
{
    awayres +=n
    awayresel.innerText=awayres
}