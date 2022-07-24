var random1 = Math.floor(Math.random()*6)+1;
var source1= 'dice'+random1 +'.jpg';
var img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src', source1);

var random2 = Math.floor(Math.random()*6)+1;
var source2= 'dice'+random2 +'.jpg';
var img2 = document.querySelectorAll('img')[1];
img2.setAttribute('src', source2);
if(random1>random2){
    document.querySelector('h1').innerHTML = "Player1 wins"

}
else if(random1<random2){
    document.querySelector('h1').innerHTML = "Player2 wins"
}
else{
    document.querySelector('h1').innerHTML = "Draw"
}