// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {
  for (var i = 0; i < 6; i++) { //creo un ciclo for per generare 6 contenitori di quadrati
      $('body').append('<div class="quadrati-container"></div>');
  };
  for (var i = 0; i < 6; i++) { //creo un altro ciclo for per creare 6 quadrati all'interno dei 6 contenitori
      $('.quadrati-container').append('<div class="quadrato"></div>');
  };
  $('.quadrato').click(function(){ //dopo aver creato la griglia 6x6, al click sul singolo quadrato parte una richiesta ad ajax
    var quadratoCliccato = $(this); //creo una var per selezionare solo il quadrato cliccato
    if (!quadratoCliccato.hasClass('yellow') && !quadratoCliccato.hasClass('green')) { //faccio in modo che se il quadrato non cambi proprietà se cliccato più volte
      $.ajax(
        {
          url : "https://flynn.boolean.careers/exercises/api/random/int", // indirizzo del server che chiamo dove viene generato un numero casuale da 0 a 9
          method : "GET", //indico come metodo GET per chiedere dati all'url
          success : function (data) {
              if (data.response <= 5) { //se response dell'url è minore/uguale a 5
                $(quadratoCliccato).addClass('yellow').text(data.response); //aggiungo la classe yellow per colorare il quadrato di giallo e inserisco il numero casuale del response all'interno del quadrato
              } else { //se response dell'url è maggiore di 5
                $(quadratoCliccato).addClass('green').text(data.response); //aggiungo la classe green per colorarlo di verde e inserisco il numero casuale del response all'interno del quadrato
              }
            },
          error : function (err) {
            if (err == 404) {
              $('body').remove('<div class="quadrati-container"></div>', '<div class="quadrato"></div>');
              $('body').append('<h1> ERROREEEEEE: CONTROLLA IL TUO URL </h1>');
            }
          }
        });
    }
  });

});
