var tempSearch;
var tempPpt;
var tempReport;
var tempAnnoun;

$(document).ready(function(){
    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_check',param,function(date){
        var  dd = JSON.parse(date);
        //console.log("adsfasdf"+date);
        $('#name1').html(dd[0].mem_name);
        $('#name2').html(dd[1].mem_name);
        $('#name3').html(dd[2].mem_name);
        $('#name4').html(dd[3].mem_name);
    });

    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_check_score1',param,function(date){
        var dd = JSON.parse(date);
        console.log(dd[1]);
        //console.log("adsfasdf"+dd);
        //var myArray=[dd[0],dd[1],dd[2],dd[3]];
        var aa = new Array();
        aa[0]= dd[0].role1_score;
        aa[1]= dd[1].role1_score;
        aa[2]= dd[2].role1_score;
        aa[3]= dd[3].role1_score;
        var max = Math.max.apply(null,aa);

        for(var i=0;i<4;i++){
            if(max==dd[i].role1_score)
            tempSearch=i;
        }
        $('#mainrole'+(tempSearch+1)).html('자료조사');
    });
    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_check_score2',param,function(date){
        var dd = JSON.parse(date);
        console.log(dd[1]);
        //console.log("adsfasdf"+dd);
        //var myArray=[dd[0],dd[1],dd[2],dd[3]];
        var aa = new Array();

        for(var i=0;i<4;i++){
            if(tempSearch!=i)
            aa[i]=dd[i].role2_score;
            else
            aa[i]=0;
        }
        var max = Math.max.apply(null,aa);

        for(var i=0;i<4;i++){
            if(max==dd[i].role2_score)
            tempPpt=i;
        }
        $('#mainrole'+(tempPpt+1)).html('PPT');
    });
    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_check_score3',param,function(date){
        var dd = JSON.parse(date);
        console.log(dd[1]);
        //console.log("adsfasdf"+dd);
        //var myArray=[dd[0],dd[1],dd[2],dd[3]];
        var aa = new Array();
        for(var i=0;i<4;i++){
            if(tempSearch!=i && tempPpt!=i)
            aa[i]=dd[i].role3_score;
            else
            aa[i]=0;
        }
        var max = Math.max.apply(null,aa);

        for(var i=0;i<4;i++){
            if(max==dd[i].role3_score)
            tempAnnoun=i;
        }
        $('#mainrole'+(tempAnnoun+1)).html('발표');
    });
    var param={
        group_num : 1,
        ip:ip()
    };
    $.post('/get_check_score4',param,function(date){
        var dd = JSON.parse(date);
        console.log(dd[1]);
        //console.log("adsfasdf"+dd);
        //var myArray=[dd[0],dd[1],dd[2],dd[3]];
        var aa = new Array();
        for(var i=0;i<4;i++){
            if(tempSearch!=i  && tempPpt!=i && tempAnnoun!=i)
            aa[i]=dd[i].role4_score;
            else
            aa[i]=0;
        }
        var max = Math.max.apply(null,aa);

        for(var i=0;i<4;i++){
            if(max==dd[i].role4_score)
            tempReport=i;
        }
        $('#mainrole'+(tempReport+1)).html('보고서');
    });

    $('#leader_tab').click(function(){
        window.location.href="../html/leader.html"
    });
    $('#role_tab').click(function(){
        window.location.href="../html/role_setting.html"
    });
    $('#restart_hover').click(function(){
        window.location.href="../html/role_setting.html"
    });
});
