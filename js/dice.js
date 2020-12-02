$(document).ready(function(){
    $('#leader_tab').click(function(){
        let select=confirm("조장뽑기 첫 화면으로 이동할까요?");
        if(select==1)
        {
            console.log("예");
            document.location.href="../html/leader.html"
        }
        else
            console.log("아니오");
    });
    $('#role_tab').click(function(){
        document.location.href="../html/role_setting.html"
    });
});