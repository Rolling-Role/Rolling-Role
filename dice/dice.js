$(document).ready(function(){
    // $('#leader_tab').hover(function(){
    //     $('#leader_tab').css('background-color', 'rgb(236, 255, 197)');
    //     $('#role_tab').css('background-color', 'transparent');
    // });
    // $('#role_tab').hover(function(){
    //     $('#leader_tab').css('background-color', 'transparent');
    //     $('#role_tab').css('background-color', 'rgb(236, 255, 197)');
    // });

    $('#leader_tab').click(function(){
        let select=confirm("조장뽑기 첫 화면으로 이동할까요?");
        if(select==1)
        {
            console.log("예");
            window.location.href="../index_temp.html"
        }
        else
            console.log("아니오");
    });
    $('#role_tab').click(function(){
        window.location.href="../role_setting/role_setting.html"
    });
});