$(document).ready(function () {
  $("a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

$(".circle ul li a div").click(function(e) {
  e.preventDefault();
  $(".circle ul li a div").removeClass('active');
  $(this).addClass('active');
})

$(window).scroll(function(){
  $('header').each(function(){
    var circe = $('#slide_1');
    var second = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if(second < topOfWindow){
      $(".circle ul li a div").removeClass('active');
      circe.addClass('active')
    }
  })
})

$(window).scroll(function(){
  $('.services').each(function(){
    var circe = $('#slide_2');
    var second = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if(second < topOfWindow+200){
      $(".circle ul li a div").removeClass('active');
      circe.addClass('active')
    }
  })
})

$(window).scroll(function(){
  $('.portfolio').each(function(){
    var circe = $('#slide_3');
    var second = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if(second < topOfWindow+200){
      $(".circle ul li a div").removeClass('active');
      circe.addClass('active')
    }
  })
})

$(window).scroll(function(){
  $('.feedback').each(function(){
    var circe = $('#slide_4');
    var second = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if(second < topOfWindow+200){
      $(".circle ul li a div").removeClass('active');
      circe.addClass('active')
    }
  })
})

$(document).ready(function(){
  $("#form").submit(function(){
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize()
    }).done(function(){
      alert('Спасибо')
    });
    return false;
  });
});
