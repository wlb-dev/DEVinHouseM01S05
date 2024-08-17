const btnNewPost = document.getElementById("btn_newPost");
btnNewPost.addEventListener("click", criarPost);
let posts = [];
function criarPost(event) {
  event.preventDefault();
  const titulo = document.getElementById("tituloMsg").value;
  const descricao = document.getElementById("descricaonMsg").value;
  const categoria = document.getElementById("categoriaMsg").value;
  const imagem = document.getElementById("fotoAnimal").value;
  if (titulo && descricao) {
    const postLocalStorage = JSON.parse(localStorage.getItem("posts"));
    if (postLocalStorage) {
      posts = postLocalStorage;
    }
    let novoPost = {};
    if (postLocalStorage && postLocalStorage != "") {
      const ultimoIndex = postLocalStorage.length - 1;
      novoPost.id = postLocalStorage[ultimoIndex].id + 1;
    } else {
      novoPost.id = 0;
    }
    novoPost.titulo = titulo;
    novoPost.descricao = descricao;
    novoPost.categoria = categoria;
    novoPost.imagem = imagem;
    novoPost.data = new Date();
    posts.push(novoPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    const formulario = document.getElementById("formCriarMensagem");
    formulario.reset();
    alert("Mensagem criada com sucesso.");
  } else {
    alert("Preenchimento incompleto.");
  }
}
