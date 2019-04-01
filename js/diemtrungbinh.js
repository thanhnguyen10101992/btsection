$(document).ready(function(){
  $("#tinhdiemtb").click(function(){
    var a=parseInt($("#diemtoan").val());
    var b=parseInt($("#diemly").val());
    var c=parseInt($("#diemhoa").val());
    var dtb=(a+b+c)/3;
    console.log('ok23',dtb)
    alert(dtb);
  });
  $("#chuyennd").click(function(){
    var a=parseInt($("#doc").val());
    var dof=(9/5)*a+32
    console.log('ok23',dof)
    alert(a+'C'+'='+  dof+'F');
  });
   $("#tinhstron").click(function(){
    var a=parseInt($("#bankinh").val());
    var Stron=a*a*Math.PI
    console.log('ok23',Stron)
    alert('Diện tích hình tròn la'+ Stron);
  });

   $('#convert').click(function(){
   	var a=parseInt($("#amount").val());
   	var b=a/23000;
   	alert('Số tiền'+ b +'USD');
   })

   $('#cong').click(function(){
      var so1=parseInt($("#so1").val());
      var so2=parseInt($("#so2").val());
      var tong=so1+so2;
      alert ('Tổng 2 số là'+ ' '+ tong)
   })


   $('#tru').click(function(){
      var so1=parseInt($("#so1").val());
      var so2=parseInt($("#so2").val());
      var hieu=so1-so2;
      alert ('Hiệu 2 số là'+ ' '+ hieu)
   })

   $('#nhan').click(function(){
      var so1=parseInt($("#so1").val());
      var so2=parseInt($("#so2").val());
      var nhan=so1*so2;
      alert ('Tích 2 số là'+ ' '+ nhan)
   })

   $('#chia').click(function(){
      var so1=parseInt($("#so1").val());
      var so2=parseInt($("#so2").val());
      var thuong=so1/so2;
      alert ('Thương 2 số là'+ ' '+ thuong)
   })


   $('#tinhsongay').click(function(){
      var thang=parseInt($("#thang").val());
      switch (thang) {
      case 1:
        day = "31 ngày";
        break;
      case 2:
        day = "28 hoặc 29 ngày";
        break;
      case 3:
        day = "31 ngày";
        break;
      case 4:
        day = "30 ngày ";
        break;
      case 5:
        day = "31 ngày";
        break;
      case 6:
        day = "30 ngày";
        break;
      case  7:
        day = "31 ngày ";
        break;
      case 8:
        day = "31 ngày";
        break;
      case 9:
        day= "30 ngày";  
        break;
      case 10:
        day= "31 ngày";
        break;
      case 11:
        day= "30 ngày";
        break
      case 12:
        day= "31 ngày";    

    }

    alert('tháng'+ ' '+ thang +' ' +'có' +' '+ day);

   })

});	