//  translateZ는  .dice의 가로값 절반이면 됨
// 리사이징 될 떄마다 계산
$(document).ready(function(){
            // console.log(screen.availWidth);
            // console.log(screen.availHeight);
            //console.log(window.innerWidth);
if(window.innerWidth<800)
{
    $('.dice_opensource').css('margin-left', '-10%');
}
else if(window.innerWidth>1000)
{
    $('.dice_opensource').css('margin-left', '22%');
}
var dice = document.querySelectorAll('.dice');
var dice_width = dice[0].clientWidth;
var face1 = document.querySelectorAll('.face1');
var face2 = document.querySelectorAll('.face2');
var face3 = document.querySelectorAll('.face3');
var face4 = document.querySelectorAll('.face4');
var face5 = document.querySelectorAll('.face5');
var face6 = document.querySelectorAll('.face6');
function DiceResizing(){
  Array.prototype.forEach.call(face1, function(item){
    item.style.transform = 'rotateY(360deg) translateZ(' + dice_width/2 + 'px)';
  });
  Array.prototype.forEach.call(face2, function(item){
    item.style.transform = 'rotateY(450deg) translateZ(' + dice_width/2 + 'px)';
  });
  Array.prototype.forEach.call(face3, function(item){
    item.style.transform = 'rotateX(450deg) translateZ(' + dice_width/2 + 'px)';
  });
  Array.prototype.forEach.call(face4, function(item){
    item.style.transform = 'rotateX(630deg) translateZ(' + dice_width/2 + 'px)';
  });
  Array.prototype.forEach.call(face5, function(item){
    item.style.transform = 'rotateY(630deg) translateZ(' + dice_width/2 + 'px)';
  });
  Array.prototype.forEach.call(face6, function(item){
    item.style.transform = 'rotateY(540deg) translateZ(' + dice_width/2 + 'px)';
  });
}

DiceResizing();

window.onresize = function(){
  dice_width = dice[0].clientWidth;
  DiceResizing();
};

// 랜덤 주사위 눈
var RandomNumber = function(){
  return 'face' + Math.ceil(Math.random()*6); {/*기존 오픈소스에서 floor함수 사용(0~5)으로 인해6이 안나오던 현상 -> ceil 함수 사용(1~6)으로 해결*/}
};
function rolling(n){
  dice[n].classList.add(RandomNumber());
//   dice[1].classList.add(RandomNumber());
}

// 주사위 굴리기
var btnRolling = document.querySelector('#btnRolling');
btnRolling.onclick = function(){
  dice[0].classList.value = "dice";
  dice[1].classList.value = "dice";
  rolling(0);
  rolling(1);
};
});