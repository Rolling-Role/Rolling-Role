$(document).ready(function(){
    $('#leader_tab').click(function(){
        window.location.href="../html/leader.html"
    });
    $('#role_tab').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_left').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_right').click(function(){
        window.location.href="../html/check.html"
    });

    $('.check').click(function(e){
        let clicked=e.target.id;
        // console.log(clicked);
        let flag_test=String(1);
        if($('#'+clicked).attr('data-flag')===flag_test)
         {
            $('#'+clicked).attr('src', '../rollingrole_images/check_before.png')
            $('#'+clicked).attr('data-flag','0')
            // console.log($('#'+clicked).attr('data-flag'))
         }
        else
        {
            $('#'+clicked).attr('src', '../rollingrole_images/check_after.png')
            $('#'+clicked).attr('data-flag','1')
            // console.log($('#'+clicked).attr('data-flag'))
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