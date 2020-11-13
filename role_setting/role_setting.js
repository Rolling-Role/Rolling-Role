$(document).ready(function(){
    $('#leader_tab').click(function(){
        window.location.href="../temp/index_temp.html"
    });
    $('#role_tab').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_left').click(function(){
        alert("역할분담 첫화면입니다");
    });
    $('#arrow_right').click(function(){
        window.location.href="../temp/speciality_check_temp.html"
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

    $('#labelarea_last').click(function(){
        let flag_target=$('#labelarea_last').attr('data-flag');
        switch(flag_target){
            case String(4) : console.log("2line last");//두번째 라인에 추가
                             $('#labelarea_last').attr('data-flag', '5');break;
            case String(5) : console.log("3line start");//세번째 라인을 만들고 그안에 추가
                             $('#labelarea_last').attr('data-flag', '6');break;
            case String(6) : console.log("3line middle")
                            $('#labelarea_last').attr('data-flag', '7');break;
            case String(7) : console.log("3line last")
                            $('#labelarea_last').attr('data-flag', '8');break;
            case String(8) : console.log("4line start")
                            $('#labelarea_last').attr('data-flag', '9');break;
            case String(9) : console.log("4line middle")
                            $('#labelarea_last').attr('data-flag', '10');break;
            case String(10) : console.log("4line last")
                            $('#labelarea_last').attr('data-flag', '11');break;
            case String(11): alert("무료 버전은 11개까지만 가능합니다!");break;
            //js로 태그 추가하기  $("#test").append("bbb");사용
            
            default:;break;
                        
        }
    });
});