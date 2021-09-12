$(document).ready(function(){
    $('#start_hover').click(function(){


            var a1=$('#role_name1').val();
            var a2=$('#role_name2').val();
            var a3=$('#role_name3').val();
            var a4=$('#role_name4').val();
            var a5=$('#role_name5').val();
            var a6=$('#role_name6').val();
            var a7=$('#role_name7').val();
            var a8=$('#role_name8').val();
            var a9=$('#role_name9').val();

            console.log(a1);

            var param = {
                mem1 : a1, mem2 : a2, mem3 : a3, mem4 : a4, mem5 : a5,
                mem6 : a6, mem7 : a7, mem8 : a8, mem9 : a9,
                ip:ip()
            };
            $.post('/add_mem',param,function(data){ 
                window.location.href="../html/dice.html"
            });
        });
      
    

    $('#role_tab').click(function(){
        window.location.href="../html/role_setting.html"
    });

    var cur=3;
    $('.fake_name').click(function get_dice_num(){
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
    });
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
    });

});