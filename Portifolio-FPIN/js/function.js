//////////////SLIDE

var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});
/////////////////

///////////CONTADOR

const tempo_intervalo = 5; //ms -> define a velocidade da animação
const tempo = 10000; //ms -> define o tempo total da animaçao

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'));
  let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
  let incremento = count_to / intervalos; //quanto cada contador deve aumentar
  let valor = 0;
  let el = $(this);
  
  let timer = setInterval(function() {
    if (valor >= count_to){ //se já contou tudo tem de parar o timer
      valor = count_to;
      clearInterval(timer);
    }
    
    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    el.text(texto);
    valor += incremento;      
  }, tempo_intervalo);
});

/////////////////////////

/////////////////SCROLL


$(document).ready(function() {
  // mostra esconde menu
    $("a.mostra-esconde-menu").click(function(){
        $(".menu_mluv_retratil").toggleClass('esconder');     
    }); 
  });
  // menu ao rolar
  $(window).bind('scroll', function () {
        if ($(window).scrollTop() < 450) {
          $(".menu_mluv_retratil").addClass('esconder');
        } else if ($(window).scrollTop() > 450) {
          $(".menu_mluv_retratil").removeClass('esconder');         
        }
  });

  //////////////

  $(document).ready(function() {
    // mostra esconde menu
      $("a.modeon").click(function(){
          $(".modeon").toggleClass('esconder');     
      }); 
    });
    // menu ao rolar
    $(window).bind('scroll', function () {
          if ($(window).scrollTop() < 450) {
            $(".modeon").addClass('esconder');
          } else if ($(window).scrollTop() > 450) {
            $(".modeon").removeClass('esconder');         
          }
    });