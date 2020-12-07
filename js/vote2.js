$(document).ready(function(){
    var agree=0;
    var disagree=0;
    var final_vote;

    for(var i=0; i<5; i++) {
        $("#VOTE").click(function(){
            if($("#agree").is(':checked'))
                agree++;
            else
                disagree++;
            $("#agree").prop('checked', false);
            $("#disagree").prop('checked', false);
        })
    }


    if(agree>disagree)
        final_vote="찬성";
    else if(agree<disagree)
        final_vote="반대";
    else
        final_vote="찬성/반대 동일";

    function send(final_vote){
        var param = {
            opinion : final_vote,
            ip:ip(),
        };
        $.post('/saveVote',param,function(data){ 
            document.location.href="../html/leaderresult.html";
        });
    }
    send(final_vote);
});