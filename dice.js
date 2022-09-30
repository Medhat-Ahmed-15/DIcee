var images=['images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png',]

var pickedImage1=Math.floor((Math.random()*5)+1);
var pickedImage2=Math.floor((Math.random()*5)+1);

document.querySelector(".img1").setAttribute("src",images[pickedImage1]);
document.querySelector(".img2").setAttribute("src",images[pickedImage2]);

if(pickedImage1>pickedImage2)
{
    document.querySelector("h1").textContent="🚩 Player 1 wins !";
}

else if(pickedImage2>pickedImage1)
{
    document.querySelector("h1").textContent="Player 2 wins ! 🚩";
}

else{
    document.querySelector("h1").textContent="🟥 Draw 🟥";
}




