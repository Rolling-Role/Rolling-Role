$(document).ready(function(){
    $('#start_hover').click(function(){
        window.location.href="../html/dice.html"
    });
    $('#role_tab').click(function(){
        window.location.href="../html/role_setting.html"
    });

var cur=3;
$('.fake_name').click(function(){
    if($('#fake_name'+cur).attr('data-flag')=='0')
    {
        $('#fake_name'+cur).attr('data-flag', '1')
        $('#role_name'+cur).css('display', 'inline-block');
        $('#fake_name'+cur).css('display', 'none');
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
        $('#cancel'+(cur-1)).css('visibility', 'visible');
        $('#cancel'+cur).css('visibility', 'hidden');
})


});