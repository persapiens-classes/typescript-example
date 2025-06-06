RIA Example
=======
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Build Status](https://github.com/persapiens-classes/ifrn-ria-example/actions/workflows/node.yml/badge.svg)](https://github.com/peraspiens-classes/ifrn-ria-example/actions)

This is the pedagogical example app of the discipline [Applications with Rich Interfaces](https://github.com/persapiens-classes/ifrn-ria) - [Tecnologia em Análise e Desenvolvimento de Sistemas - TADS](https://sites.google.com/escolar.ifrn.edu.br/diatinf/cursos/superiores/an%C3%A1lise-e-desenvolvimento-de-sistemas?authuser=0) - [Diretoria Acadêmica de Gestão e Tecnologia da Informação - DIATINF](https://diatinf.ifrn.edu.br) - [Campus Natal Central - CNAT](https://portal.ifrn.edu.br/campus/natalcentral) - [Instituto Federal do Rio Grande do Norte - IFRN](https://portal.ifrn.edu.br/).

We usually improve this app weekly during the classes.


## Atividade 1
- Pra testar com o jest: 
```bash
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
npx jest fatorial2.test.ts
```

- pra testar o comum:
```bash
npm install -g ts-node typescript //(pra garantir)
ts-node fatorial.test.ts
```