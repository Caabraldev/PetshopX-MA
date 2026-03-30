const form = document.getElementById("formAgendamento");
const confirmBox = document.getElementById("confirmBox");
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio automático
  confirmBox.style.display = "block";
});

btnSim.addEventListener("click", function() {
  confirmBox.style.display = "none";
  form.submit(); // envia o formulário de verdade
});

btnNao.addEventListener("click", function() {
  confirmBox.style.display = "none";
});

const imagens = [
  "imagens/banner1.webp",
  "imagens/banner2.jpeg",
  "imagens/banner3.jpg"
];

let index = 0;

function trocarImagem() {
  index++;
  if (index >= imagens.length) {
    index = 0;
  }
  document.getElementById("slide").src = imagens[index];
}

setInterval(trocarImagem, 3000); // troca a cada 3 segundos