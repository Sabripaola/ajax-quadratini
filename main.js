// Griglia 6x6, ad ogni click parte una richiesta AJAX
// prende un numero random da 1 a 9
// Se è <= 5 il quadrato diventa giallo
// se è > di 5 il quadrato diventa verde
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){
  for (var i = 0; i < 36; i++){
    var temp = $('.template .square').clone();
    $('.contenitore').append(temp);
  }
  $(document).on("click",".square",function(){
    var quadrato = $(this);
    $.ajax({
      url : 'https://www.boolean.careers/api/random/int',
      method : 'GET',
      success : function (data){
      var numero = data.response;
      var number = quadrato.html(numero);
      $(quadrato).append(number);
      if (numero <= 5){
      quadrato.addClass("giallo");
      }
      else {
      quadrato.addClass("verde");
      }
  },
      error : function(){
      alert("Si è verificato un errore");
  }
  });
    });
});
