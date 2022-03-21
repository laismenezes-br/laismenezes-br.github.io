/*Nomes de equipe sugerido para rodar o programa:
GRIFINORIA
SONSERINA
CORVINAL
LUFA-LUFA*/

//função para inserção do nome do jogador/casa de hogwarts
function ADD() {
  var inputAdicionar = document.getElementById("nomeDaEquipe").value;
  var nomeEquipe = inputAdicionar;
  jogadores.push(listaDeJogadores(nomeEquipe));
  exibeJogadoresNaTela(jogadores);
  document.getElementById("nomeDaEquipe").value = "";
}

//função para exibir jogadores/casas de hogwarts zeradas
function listaDeJogadores(nome) {
  return (jogador = {
    nome: nome,
    partidas: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

//Lista de jogadores inseridos pelo usuário;
var jogadores = [];

//função para calcular os pontos
function calPontos(jogador) {
  pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

//criar função com elementos de cada objeto da lista para passar para tabela 'html'
function exibeJogadoresNaTela(jogadores) {
  var elemento = ""; //contém as linha de todos os jogadores

  //laço 'for' para adquirir cada (chave/valor) doobjeto selecionado
  for (var i = 0; i < jogadores.length; i++) {
    //utilizando-se a estrutura 'html' para a linha de cada jogador, coloca-se cada uma das linhas na variável elemento
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento; //coloca dentro desse elemento as                                               informações
}
exibeJogadoresNaTela(jogadores);

//para interação dos botões
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  //função rândomica para selecionador jogador empatado
  var jogador_empatado = Math.floor(Math.random() * jogadores.length);

  //para o próprio jogador não ser selecionado
  if (jogadores[jogador_empatado] != jogador) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calPontos(jogador);

    jogadores[jogador_empatado].empates++;
    jogador = jogadores[jogador_empatado];
    jogadores[jogador_empatado].pontos = calPontos(jogador);

    exibeJogadoresNaTela(jogadores);
  }
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  //para a vitória de alguém adiciona-se a derrota de outro
  var jogador_derrotado = Math.floor(Math.random() * jogadores.length);

  //para o próprio jogador não ser selecionado
  if (jogadores[jogador_derrotado] != jogador) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calPontos(jogador);

    jogadores[jogador_derrotado].derrotas++;
    exibeJogadoresNaTela(jogadores);
  }
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  //para a derrota de alguém adiciona-se a vitóri de outro
  var jogador_vitorioso = Math.floor(Math.random() * jogadores.length);

  //para o próprio jogador não ser selecionado
  if (jogadores[jogador_vitorioso] != jogador) {
    var jogador = jogadores[i];
    jogador.derrotas++;

    jogadores[jogador_vitorioso].vitorias++;
    jogador = jogadores[jogador_vitorioso];
    jogador.pontos = calPontos(jogador);
    jogador = jogadores[jogador_vitorioso];
    exibeJogadoresNaTela(jogadores);
  }
}
//função do vencedor executada quando o botão de fim do campeonato é pressionado

//botão para encerrar campeonato(zerar tabela)
function limparDados(jogador) {
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
}

function zerarCampeonato() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    limparDados(jogador);
  }

  exibeJogadoresNaTela(jogadores);
}

//Exibir vencedor
function image(vencedor) {
  var img = document.createElement("IMG");
  img.src =
    "https://cdn.icon-icons.com/icons2/1352/PNG/128/if-07-harry-potter-colour-golden-snitch-2730320_88154.png";
  document.getElementById("image").appendChild(img);

  var winner = document.getElementById("winner");
  winner.innerHTML = vencedor;
}

//funçao para cálculo do vencedor do campeonato
function calculaVencedor() {
  listaPontos = []; //lista com a pontuação final de cada uma das casas
  listaVencedor = []; //lista das casas
  for (var i = 0; i < jogadores.length; i++) {
    var lista = jogadores[i].pontos;
    listaPontos.push(lista);
    var vencedor = jogadores[i].nome;
    listaVencedor.push(vencedor);
  }
  //pega maior valor da lista de pontuação
  valor = Math.max.apply(null, listaPontos);
  console.log(valor);
  console.log(listaVencedor);

  // 'indexOf' pega o índice da maior pontuação no array
  indice = listaPontos.indexOf(valor);
  vencedor = listaVencedor[indice];
  console.log(vencedor);
  image(vencedor);
}

function reset() {
  jogadores = [];
  nome = [];
  exibeJogadoresNaTela(jogadores);
}
