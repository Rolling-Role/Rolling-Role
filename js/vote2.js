$(document).ready(function(){
    var agree=0;
    var disagree=0;
    var final_vote;
    var count=0;

        $("#VOTE").click(function() {
            if (count<=8) {
                if($("#agree").is(':checked'))
                agree++;
            else
                disagree++;
        
            console.log("agree"+agree);
            console.log("disagree"+disagree);
        
            $("#agree").prop('checked', false);
            $("#disagree").prop('checked', false);
            count++;

            $('#third').text("  [투표 시행 횟수 : "+ (count+1)+"]");

            if(count>=9) {
                alert("투표 최대 횟수 초과입니다!")
            }

            }

        })
        
        var str="../html/role_setting.html";

        $('#VOTE_F').click(function(){
                if(agree>disagree) {
                    final_vote="찬성";
                    str="../html/role_setting.html";
                }
                else if(agree<disagree) {
                    final_vote="반대";
                    str="../html/dice.html";
                }
                else {
                    final_vote="찬성/반대 동일";
                    str="../html/dice.html";
                }

        
                $('#vote2').html("최종 투표 결과 : "+ final_vote);
                $('#vote2').css('visibility','visible');
                });

        $('#AGREE').click(function() {
            document.location.href=str;
        });


});
