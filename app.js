console.log(dados);
let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = "";

for (let dado of dados) {
  resultados += `
    <div class="item-pesquisa">
      <a href="${dado.link}" target="_blank">
        <img src="${dado.image}" alt="${dado.titulo}">
      </a>
      <div>
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
    </article>
  `;
}

section.innerHTML = resultados