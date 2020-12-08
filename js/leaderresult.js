$(document).ready(function(){
    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_dice_num',param,function(date){
        var  dd = JSON.parse(date);
        eee = dd[0].leader_num;
    });
    var eee;

    $.post('/get_member',param,function(date){
        var  dd = JSON.parse(date);
        if(eee==dd[0].mem_num){
            $('#name').html(dd[0].mem_name+"님 조장 당첨!");
        }
        else if(eee==dd[1].mem_num){
            $('#name').html(dd[1].mem_name+"님 조장 당첨!");
        }
        else if(eee==dd[2].mem_num){
            $('#name').html(dd[2].mem_name+"님 조장 당첨!");
        }
        else if(eee==dd[3].mem_num){
            $('#name').html(dd[3].mem_name+"님 조장 당첨!");
        }
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
