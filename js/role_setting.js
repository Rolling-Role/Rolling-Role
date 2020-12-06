$(document).ready(function(){
    $('#leader_tab').click(function(){
        document.location.href="../html/leader.html"
    });
    $('#role_tab').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_left').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_right').click(function(){
        for(i=0;i<9;i++){
            let id='#check_after'+(i+1);
            if($(id).attr('data-flag')=='0')
            {
                let rn='#role_name'+(i+1);
                let dn='#number_input'+(i+1);
                $(rn).attr('value', ' ');
                $(rn).text(' ');
                $(dn).val(0);
            }
        }
        //DB 역할 테이블에 역할정보 저장 요청
        var param={
            ip : ip(),
            role_name1 : $('#role_name1').text(),
            role_name2 : $('#role_name2').text(),
            role_name3 : $('#role_name3').text(),
            role_name4 : $('#role_name4').text(),
            role_name5 : $('#role_name5').val(),
            role_name6 : $('#role_name6').val(),
            role_name7 : $('#role_name7').val(),
            role_name8 : $('#role_name8').val(),
            role_name9 : $('#role_name9').val(),

            do_num1 : $('#number_input1').val(),
            do_num2 : $('#number_input2').val(),
            do_num3 : $('#number_input3').val(),
            do_num4 : $('#number_input4').val(),
            do_num5 : $('#number_input5').val(),
            do_num6 : $('#number_input6').val(),
            do_num7 : $('#number_input7').val(),
            do_num8 : $('#number_input8').val(),
            do_num9 : $('#number_input9').val(),
        }
        $.post("/role_name", param,function(){
            document.location.href="../html/check.html";
        });
    });

    $('.check').click(function(e){
        let clicked=e.target.id;
        // console.log(clicked);
        let flag_test=String(1);
        if($('#'+clicked).attr('data-flag')===flag_test)
         {
            $('#'+clicked).attr('src', '../rollingrole_images/check_before.png')
            $('#'+clicked).attr('data-flag','0')
         }
        else
        {
            $('#'+clicked).attr('src', '../rollingrole_images/check_after.png')
            $('#'+clicked).attr('data-flag','1')
        }
    })
    var cur=5;
    $('.fake_name').click(function(){
        if($('#fake_name'+cur).attr('data-flag')=='0')
        {
            $('#fake_name'+cur).attr('data-flag', '1')
            $('#role_name'+cur).css('display', 'inline-block');
            $('#fake_name'+cur).css('display', 'none');
            $('#check_after'+cur).attr('src', '../rollingrole_images/check_after.png');
            $('#cancel'+(cur-1)).css('visibility', 'hidden');
            $('#cancel'+cur).css('visibility', 'visible');
            cur+=1;
            $('#labelarea'+cur).css('visibility', 'visible');
        }
    })
    $('.cancel').click(function(e){
            $('#labelarea'+cur).css('visibility', 'hidden');
            cur-=1;
            $('#role_name'+cur).val('');
            $('#number_input'+cur).val('');
            $('#fake_name'+cur).attr('data-flag', '0')
            $('#role_name'+cur).css('display', 'none');
            $('#fake_name'+cur).css('display', 'inline-block');
            $('#check_after'+cur).attr('src', '../rollingrole_images/check_before.png');
            $('#cancel'+(cur-1)).css('visibility', 'visible');
            $('#cancel'+cur).css('visibility', 'hidden');
    })
});