$(document).ready(function(){
    var param={
        group_num : 1
    };
    $.post('/get_dice_num',param,function(date){
        var  dd = JSON.parse(date);
        //console.log("adsfasdf"+date);
        $('#name').html(dd[0].leader_num+"번 팀원님이 조장입니다!");
    });
        
    

    $('#leader_tab').click(function(){
        window.location.href="../html/leader.html"
    });
    $('#role_tab').click(function(){
        window.location.href="../html/role_setting.html"
    });
    $('#vote').click(function(){
        window.location.href="../html/vote2.html"
    });
    
});
