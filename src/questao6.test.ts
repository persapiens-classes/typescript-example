import { Pessoa, Produto } from './questao6';

test('deve instanciar Pessoa, alterar atributos e testar descrever', () => {
  const pessoa = new Pessoa('Clara', 22);
  expect(pessoa.descrever()).toBe('Pessoa: Clara, Idade: 22');
  pessoa.nome = 'Lucas';
  pessoa.idade = 30;
  expect(pessoa.descrever()).toBe('Pessoa: Lucas, Idade: 30');
});

test('deve instanciar Produto, alterar atributos e testar descrever', () => {
  const produto = new Produto('Notebook', 3500.5);
  expect(produto.descrever()).toBe('Produto: Notebook, Preço: R$3500.50');
  produto.nome = 'Mouse';
  produto.preco = 99.99;
  expect(produto.descrever()).toBe('Produto: Mouse, Preço: R$99.99');
});
