# AppPassaroUrbano

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Serviços

Serviços são classes (recursos, valores ou funções) comuns com objetivos bem definidos que são compartilhados pela aplicação, diferente de componentes que são usados para fazer o databiding com seu respectivo template, ou seja, faz a mediação da interface entre o usuário.
Os serviços podem ser injetados no módulo (instancia principal da aplicação, para ser usado em qualquer lugar da mesma), nos componentes (tanto o componente quanto seus "filhos" herdam o serviço), apenas em um componente (somente o componente especifico faz uso do serviço) e também em outros serviços através do decorator (função decoradora) @Injectable.

## Promises

É um objeto usado para processamento assíncrono (o interpretador não se preocupa em aguardar a finalização da execução de um processo para que outro seja iniciado, ou seja, ele executa o script de forma sequêncial), seu valor pode estar disponível agora, no futuro ou nunca. Importante é saber que as promisses são capazes de formar um valor que só vai existir na aplicação depois de uma latência, então, quando esta informação estiver pronta ela pode ser tratada e devolvida para quem fez a chamada e ainda pode-se fazer uso de promises dentro de promises.

## Rotas

Permitem fazer um apontamento de uma determinada URL para um determinado componente da aplicação (configura a página que será exibida ao usuário).

## Programação Reativa

Consiste em um paradigma de programação voltado a fluxos (streams) a partir de processamentos assíncronos. Os principais pilares são:
Responsividade: Aplicações ofereçam interações ricas e em tempo real aos usuários.
Resiliência: Aplicações sejam capazes de reagir e se recuperarem de falhas de software, hardware e conectividade.
Elasticidade: Uso de múltiplos núcleos e servidores.
Orientado a Mensagens: Ao invés de compor aplicações de multiplos threads síncronos elas devem ser capazes de gerênciar eventos assíncronos e não bloqueantes.
