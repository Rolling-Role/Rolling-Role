$(document).ready(function(){
    $('#leader_tab').click(function(){
        window.location.href="../index_temp.html"
    });
    $('#role_tab').click(function(){
        alert("역할분담 첫화면입니다");
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
});