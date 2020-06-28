const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.querySelector('.btn-type');
const color=document.querySelector('.color');
const bodybgb=document.querySelector("body");
btn.addEventListener('click',changecolor);
function changecolor()
{

let hexcolor="#";
for(var i=0;i<6;i++){
	let random=Math.floor(Math.random()*hex.length);
	hexcolor+=hex[random];
}
bodybgb.style.backgroundColor=hexcolor;

color.innerHTML=hexcolor;
}