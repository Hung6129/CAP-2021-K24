$(".menu").click(function(){
    $("#mySidenav").css('width','70px');
    $("#main").css('margin-left','70px');
    $(".logo").css('display', 'none');
    $(".logo1").css('display','block');
    $(".logo span").css('visibility', 'visible');
     $(".logo span").css('margin-left', '-10px');
     $(".icon-a").css('visibility', 'hidden');
     $(".icon-a").css('height', '25px');
     $(".icons").css('visibility', 'visible');
     $(".icons").css('margin-left', '-8px');
      $(".menu1").css('display','block');
      $(".menu").css('display','none');
  });

$(".menu1").click(function(){
    $("#mySidenav").css('width','300px');
    $("#main").css('margin-left','300px');
    $(".logo").css('visibility', 'visible');
    $(".logo").css('display','block');
     $(".icon-a").css('visibility', 'visible');
     $(".icons").css('visibility', 'visible');
     $(".menu").css('display','block');
      $(".menu1").css('display','none');
 });


 $(document).ready(function(){
    $(".profile p").click(function(){
      $(".profile-div").toggle();
      
    });
    $(".noti-icon").click(function(){
      $(".notification-div").toggle();
    });
  });


  //active select item
  let items = document.querySelectorAll('.icon-a');
  for(let i=0; i<items.length; i++){
    items[i].onclick = function(){
      let j = 0;
      while(j < items.length){
        items[j++].className = 'icon-a';
      }
      items[i].className = 'icon-a active';
    }
  }