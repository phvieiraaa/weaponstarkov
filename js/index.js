var campoPesquisa = document.querySelector("#input-tabela");

campoPesquisa.addEventListener("input", function () {
  var trArmas = document.querySelectorAll(".tr-armas");

  if (this.value.length > 0) {
    for (var i = 0; i < trArmas.length; i++) {
      const armas = trArmas[i];
      const tdNome = armas.querySelector(".td-name");
      const nome = tdNome.textContent;
      const expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        armas.classList.add("invisivel");
      } else {
        armas.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < trArmas.length; i++) {
      const armas = trArmas[i];
      armas.classList.remove("invisivel");
    }
  }
});
