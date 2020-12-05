$(document).ready(function(){
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

// 랜덤 주사위 눈
var res=Math.ceil(Math.random()*6);
var RandomNumber = function(){
  return 'face' + res;
};
function rolling(n){
  dice[n].classList.add(RandomNumber());
//   dice[1].classList.add(RandomNumber());
}
// 주사위 자동으로 굴리기
dice[0].classList.value = "dice";
dice[1].classList.value = "dice";
rolling(0);
rolling(1);

//DB groups테이블에 주사위결과 저장 요청
function send(res){
    var param = {
        num : res,
        ip:ip(),
    };
    $.post('/dice_num',param,function(data){ 
      setTimeout(function(){
        document.location.href="../html/leaderresult.html";
      },1700);
      
    });
}
send(res);

});