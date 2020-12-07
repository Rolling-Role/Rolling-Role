$(document).ready(function(){
  $('#leader_tab').click(function(){
    document.location.href="leader.html";
  });
  $('#role_tab').click(function(){
    document.location.href="./role_setting/role_setting.html";
  });
  $('#arrow_left').click(function(){
    document.location.href="./role_setting/role_setting.html";
  });
  $('#arrow_right').click(function(){
    document.location.href="check.html";
  });

  $('#save_img').click(function(){

    var mem_name = $('#leader_name').val();

    var search1 = $('#search1').val();
    var search2 = $('#search2').val();
    var search3 = $('#search3').val();
    var search4 = $('#search4').val();

    var searchInt1=parseInt(search1);
    var searchInt2=parseInt(search2);
    var searchInt3=parseInt(search3);
    var searchInt4=parseInt(search4);

    var searchAdd=searchInt1+searchInt2+searchInt3+searchInt4;

    var ppt1 = $('#ppt1').val();
    var ppt2 = $('#ppt2').val();
    var ppt3 = $('#ppt3').val();
    var ppt4 = $('#ppt4').val();

    var pptInt1=parseInt(ppt1);
    var pptInt2=parseInt(ppt2);
    var pptInt3=parseInt(ppt3);
    var pptInt4=parseInt(ppt4);

    var pptAdd=pptInt1+pptInt2+pptInt3+pptInt4;

    var report1=$('#report1').val();
    var report2=$('#report2').val();
    var report3=$('#report3').val();
    var report4=$('#report4').val();

    var reportInt1=parseInt(report1);
    var reportInt2=parseInt(report2);
    var reportInt3=parseInt(report3);
    var reportInt4=parseInt(report4);

    var reportAdd=reportInt1+reportInt2+reportInt3+reportInt4;

    var announ1=$('#announ1').val();
    var announ2=$('#announ2').val();
    var announ3=$('#announ3').val();
    var announ4=$('#announ4').val();

    var announInt1=parseInt(announ1);
    var announInt2=parseInt(announ2);
    var announInt3=parseInt(announ3);
    var announInt4=parseInt(announ4);

    var announAdd=announInt1+announInt2+announInt3+announInt4;

    console.log(typeof(searchAdd));
    var param = {
      ip : ip(),
      mem_name : mem_name,
      searchAdd : searchAdd,
      pptAdd : pptAdd,
      reportAdd : reportAdd,
      announAdd : announAdd
    };

    $.post('/check',param,function(){
      console.dir("저장되었습니다.");
      document.location.href="../html/check.html";
    });
  });
});