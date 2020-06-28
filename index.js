const colors=['#4bcffa','blue','#0fbcf9','#575fcf','#00d8d6'];
const btn=document.querySelector('.btn-type');
const color=document.querySelector('.color');
let count=0;

btn.addEventListener('click',function(){
const random=Math.floor(Math.random()*colors.length);
for(var i=0;i<colors.length;i++){
document.body.style.backgroundColor=colors[random];
}
color.textContent=colors[random];

});