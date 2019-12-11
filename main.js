// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {
//creo un ciclo for per generare 6 contenitori
  for (var i = 0; i < 6; i++) {
      $('body').append('<div class="quadrati-container"></div>');
  };
  //BONUS: creo un ciclo for per creare 6 quadrati all'interno degli 8 contenitori
  for (var i = 0; i < 6; i++) {
      $('.quadrati-container').append('<div class="quadrato"></div>');
  };
});
