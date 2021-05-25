(function() {
   // your page initialization code here
   // the DOM will be available here
      docm

   function soma() {
      var valor1 = document.getElementById("valor1")
      var valor2 = document.getElementById("valor2")
      let total = parseInt(valor1.value) + parseInt(valor2.value)
      document.getElementById("resultado").value = total;
      console.log(parseInt(valor1.value) + parseInt(valor2.value))

    /*function soma(){
    var valor1 = document.getElementById("valor1")
    var valor2 = document.getElementById("valor2")
    console.log(parseInt(valor1.value) + parseInt(valor2.value))
    
    var resultado = document.getElementById("resultado")
    resultado.value = String(parseInt(valor1.value) + parseInt(valor2.value))
}*/



    }
    function subtracao() {
      var valor1 = document.getElementById("valor1")
      var valor2 = document.getElementById("valor2")
      let total = parseInt(valor1.value) - parseInt(valor2.value)
      document.getElementById("resultado").value = total
    }
    function multiplicacao() {
      var valor1 = document.getElementById("valor1")
      var valor2 = document.getElementById("valor2")
      let total = parseInt(valor1.value) * parseInt(valor2.value)
      document.getElementById("resultado").value = total
    }
    function divisao() {
      var valor1 = document.getElementById("valor1")
      var valor2 = document.getElementById("valor2")
      // let total = parseInt(valor1.value) / parseInt(valor2.value)
      let total = 0
      if (parseInt(valor1.value) == 0) { 
        let total = parseInt(valor1.value) / parseInt(valor2.value)
        console.log(total) 
      } else if (parseInt(valor2.value) == 0) { 
        let total = parseInt(valor2.value) / parseInt(valor1.value)
        console.log(total) 
      }
      document.getElementById("resultado").value = total
    }

    function btnClick() {
      let btn = document.getElementsByName("input")
      console.log("btn clicado")
    }
})();

    