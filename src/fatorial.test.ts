import { fatorial } from './fatorial';

function testarFatorial() {
  try {
    console.assert(fatorial(5) === 120, "Erro: fatorial(5) deveria ser 120");
    console.assert(fatorial(0) === 1, "Erro: fatorial(0) deveria ser 1");

    try {
      fatorial(-1);
      console.error("Erro: fatorial(-1) deveria lançar um erro");
    } catch (e) {
      console.log("Sucesso: Erro lançado corretamente para fatorial(-1)");
    }

    console.log("Todos os testes passaram!");
  } catch (err) {
    console.error("Teste falhou: ", err);
  }
}

testarFatorial();
