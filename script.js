function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i) {
    setTimeout(function() {
      elemento.innerHTML += letra;

      if (i === textoArray.length - 1) {
        const input = document.querySelector('input[type="text"]');
        input.style.opacity = '1';
        input.style.transform = 'translateY(0)';
        
        // Após a digitação ser concluída, mostre o botão
        const submitButton = document.getElementById('submitButton');
        submitButton.style.visibility = 'visible';
      }
    }, 75 * i);
  });
}

function checkAnswer() {
  const answer = document.getElementById('answerInput').value.toLowerCase();
  
  if (answer === 'sleep') {
      window.location.href = 'pagina_garras.html';
  } else {
      window.location.href = 'pagina_jumpscare.html';
  }
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);