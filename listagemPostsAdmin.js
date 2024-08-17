function criarTabela() {
  const tabela = document.getElementById("corpoTabela");
  tabela.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("posts"));
  posts.forEach((post) => {
    const novaLinha = document.createElement("tr");
    const coluna1 = document.createElement("td");
    const coluna2 = document.createElement("td");
    const coluna3 = document.createElement("td");
    const coluna4 = document.createElement("td");
    coluna4.classList.add("wSpace-noWrap");
    const coluna5 = document.createElement("td");
    const btn5 = document.createElement("button");
    btn5.addEventListener("click", function () {
      deletarMensagem(post.id);
    });
    btn5.classList.add("btn");
    btn5.classList.add("btn-outline-danger");
    btn5.textContent = "excluir";
    coluna1.textContent = post.titulo;
    coluna2.textContent = post.descricao;
    coluna3.textContent = post.categoria;
    const dataPost = post.data.toString();
    coluna4.textContent = dataPost.slice(0, 10);

    tabela.appendChild(novaLinha);
    novaLinha.appendChild(coluna1);
    novaLinha.appendChild(coluna2);
    novaLinha.appendChild(coluna3);
    novaLinha.appendChild(coluna4);
    novaLinha.appendChild(coluna5);
    coluna5.appendChild(btn5);
  });
}
function deletarMensagem(id) {
  let posts = JSON.parse(localStorage.getItem("posts"));
  postsAtualizados = posts.filter((post) => post.id != id);
  localStorage.setItem("posts", JSON.stringify(postsAtualizados));
  criarTabela();
}

window.addEventListener("load", criarTabela);
