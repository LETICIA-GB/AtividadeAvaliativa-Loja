

 // var preco = $(".preco");

//$("#animacao1").on('click', function(){
   // preco.animate({width : "500px", height : "500px", borderRadius : "100%"});
//});



var nota = Number(prompt("AGUARDE, PAGAMENTO SENDO PROCESSADO! Enquanto isso... de 0 a 10 avalie sua experiência em nosso site?"));


if(nota <= 0){
  alert("Nota inválida!");
  location.reload();
} else{
  if(nota > 0 && nota < 5){    
      alert("Obrigado pelo seu feedback, vamos trabalhar para melhorar!");
      
  } else {
      if(nota >= 5 && nota <= 10){
      alert("Obrigado pelo seu feedback!");
      
      }
    }
  }