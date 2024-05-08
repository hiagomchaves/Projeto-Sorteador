
 function gerarNumero() {
    
    const min = Math.ceil (document.querySelector('.input1').value)
    const max = Math.floor (document.querySelector('.input2').value)

    const resultado = Math.floor(Math.random() * (max - min) + min);


    alert(resultado)
}

