let paraulaperadivinar= 'pepot';
function Revisar() {
  paraulaescrita = document.getElementById("caixa").innerHTML;

   paraulaperadivinar = paraulaperadivinar.toUpperCase();
   paraulaescrita = paraulaescrita.toUpperCase();
   console.log(paraulaperadivinar);
   console.log(paraulaescrita);

   if (paraulaescrita.length == paraulaperadivinar.length) {
      //continua
      for (let posicióparaula = 0; posicióparaula < paraulaescrita.length; posicióparaula += 1) {
         if (paraulaperadivinar.charAt(posicióparaula) == paraulaescrita.charAt(posicióparaula)) {
            //verd
            console.log('verd');
         } else if (paraulaperadivinar.includes(paraulaescrita.charAt(posicióparaula))) {
            //groc
            console.log('groc');
         } else {
            //vermell
            console.log('gris');
         }

      }

   } else {
      //error
      //tornar a introduir paraula escrita
      //alert('Error');
      console.log('Error');
   }
}
//Si son iguales en verd
//si hi es però no a la mateixa