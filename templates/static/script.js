 // DATA DO CASAMENTO
 function atualizarContador() {
    const dataCasamento = new Date("2027-03-20 00:00:00");
    const agora = new Date();

    const diferenca = dataCasamento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("days").innerText = dias; document.getElementById("hours").innerText = horas; document.getElementById("minutes").innerText = minutos; document.getElementById("seconds").innerText = segundos;
 }

 setInterval(atualizarContador, 1000);

 function copiarPix() {
   const chave = document.getElementById("chavePix").innerText;

   navigator.clipboard.writeText(chave).then(() => {
      document.getElementById("mensagemCopiado").innerText = "Nós te agradecemos ❤️";
 })
 .catch(() => {
   alert("Não foi possível copiar. Copie manualmente 😊");
 })
}