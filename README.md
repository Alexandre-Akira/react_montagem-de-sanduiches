# Lets Code - Montagem de Sanduíches

Esta é uma solução desenvolvida para um challenge da [Lets Code](https://www.letscode.com.br/).

## Indice

- [Visão Geral](#Visão-Geral)
  - [O Desafio](#O-Desafio)
  - [Manual do Usuario](#Manual-do-usuario)
- [Processo de desenvolvimento](#Processo-de-desenvolvimento)
  - [Tecnologias](#Tecnologias)
  - [Metodologias](#Metodologias)
  - [O que eu aprendi](#O-que-eu-aprendi)
  - [Implementacoes futuras](#Implementacoes-futuras)
  - [Recursos uteis](#Recursos-uteis)
- [Autor](#Autor)
- [Agradecimentos](#Agradecimentos)

## Visão Geral

Este APP consiste em duas paginas, sendo a primeira a home que contem um menu oferecendo os items que compoem um sanduiche em formato de opções selecionaveis, conforme o usuario seleciona estas opções elas seram listadas no resumo do pedido. Ja a segunda pagina trata-se de um checkout que ira conter os itens selecionados e um form para enviar os dados do pagamento.

### O Desafio

# Projeto final: Montagem de sanduíches

O nosso projeto final para a conclusão de curso será uma aplicação para montagem de sanduíches. Os objetivos são colocar uma aplicação de vida real para desenvolvimento de suas habilidades que possa utilizar o máximo dos conhecimentos que desenvolvemos em sala de aula.

## Regras de desenvolvimento

O projeto deve ser desenvolvido utilizando somente ReactJs, React Router e PropTypes nenhuma outra biblioteca externa será permitida. É recomendado que tentem utilizar o máximo dos conteúdos que foram passados em aula.

## Descrição do projeto

O link com o guia visual e de estilos do projeto é o seguinte: https://www.figma.com/file/yfC52fwN1hEKpPFsHlryXS/Untitled?node-id=2%3A86
A aplicação é uma plataforma para montagem de sanduíches com uma tela final de checkout.

### Rota principal (Index)

A tela inicial deve conter um cabeçalho com o título: "Monte seu sanduíche", o passo a passo para montagem do sanduíche e um resumo com tudo o que foi selecionado e o preço final

#### Passo a passo:

O passo a passo vai conter uma imagem de um sanduíche, um subtítulo indicando o passo atual e as opções referentes a cada passo. Abaixo está a listagem de passos:

<table>
	<tr>
		<th>Nome do Passo</th>
		<th>Item</th>
		<th>Preço</th>
	</tr>
	<tr>
		<td rowspan="4">Escolha seu pão</td>
		<td>Brioche</td>
		<td>R$5,00</td>
	</tr>
	<tr>
		<td>Australiano</td>
		<td>R$4,00</td>
	</tr>
	<tr>
		<td>Gergelim</td>
		<td>R$3,00</td>
	</tr>
	<tr>
		<td>Sal</td>
		<td>R$2,50</td>
	</tr>
	<tr>
		<td rowspan="4">Escolha sua carne</td>
		<td>Boi</td>
		<td>R$8,00</td>
	</tr>
	<tr>
		<td>Porco</td>
		<td>R$6,00</td>
	</tr>
	<tr>
		<td>Frango</td>
		<td>R$4,00</td>
	</tr>
	<tr>
		<td>Vegetariano</td>
		<td>R$6,00</td>
	</tr>
	<tr>
		<td rowspan="4">Escolha seu queijo</td>
		<td>Molho Gorgonzola</td>
		<td>R$8,00</td>
	</tr>
	<tr>
		<td>Prato</td>
		<td>R$6,00</td>
	</tr>
	<tr>
		<td>Chedar</td>
		<td>R$6,00</td>
	</tr>
	<tr>
		<td>Sem queijo</td>
		<td>R$0,00</td>
	</tr>
	<tr>
		<td rowspan="4">
			Escolha suas saladas<br />
			Mais de uma opção selecionável
		</td>
		<td>Alface</td>
		<td>R$1,00</td>
	</tr>
	<tr>
		<td>Tomate</td>
		<td>R$2,00</td>
	</tr>
	<tr>
		<td>Cebola</td>
		<td>R$2,00</td>
	</tr>
	<tr>
		<td>Picles</td>
		<td>R$4,00</td>
	</tr>
	<tr>
		<td rowspan="4">
			Escolha seus complementos<br />
			Mais de uma opção selecionável
		</td>
		<td>Bacon</td>
		<td>R$4,00</td>
	</tr>
	<tr>
		<td>Cebola Caramelizada</td>
		<td>R$2,00</td>
	</tr>
	<tr>
		<td>Molho Especial</td>
		<td>R$3,00</td>
	</tr>
	<tr>
		<td>Pimenta Jalapeño</td>
		<td>R$3,00</td>
	</tr>
</table>

#### Resumo do Pedido:

O resumo do pedido deve conter um título e as informações do que já foi selecionado. Assim que um ingrediente é selecionado no passo a passo ele deve aparecer no resumo e alterar o preço total. O botão de prosseguir só aparece habilitado quando no caso dos passos onde só há um item a ser selecionado um item tiver sido clicado, no outro cenário ele sempre aparece habilitado.
O total deve exibir o preço total de todos os ingredientes selecionados até aquele momento somado. Ao final do último passo (Escolha seus complementos) o usuário deve ser redirecionado para a rota de checkout.

### Rota de checkout

A tela referente a rota de checkout deve possuir um resumo do pedido, um formulário de pagamento, um cabeçalho com o título "Pague seu sanduíche" um modal de sucesso e um modal de fracasso.

#### Resumo do pedido:

O resumo do pedido deve mostrar os ingredientes selecionados em cada passo de maneira semântica e o valor total.

#### Dados de pagamento:

O botão de pagar só deve ser habilitado caso o formulário de pagamento seja válido. Caso o botão seja clicado com o formulário válido ele vai mostrar o modal de sucesso.

#### Modal de Sucesso

Deve apresentar o título **Pagamento Aprovado com Sucesso** e o texto: " _Muito obrigado pela compra, [nome do cliente], ela foi computada no cartão de final [xxx]. Esperamos que tenha um excelente lanche e que possamos vos atender mais vezes!_" além disso deve possuir um botão de Ok para fechar o modal.

#### Modal de Fracasso

Deve apresentar o título **Pagamento Recusado** e o texto: " _Identificamos que você tentou inserir um número de cartão inválido para tentar nos enganar. Calote aqui não!_" além disso deve possuir um botão de Me Desculpe para fechar o modal.

#### Validação de formulário

O formulário deve possuir os seguintes campos: Nome, Número do Cartão, Data de Vencimento, CVV e CPF.

- O campo de nome deve conter somente letras.
- O campo de cartão deve conter somente números e 12 dígitos
- O campo de data de vencimento não pode ter uma data anterior a atual
- O campo CVV deve conter 3 dígitos numéricos
- O campo CPF deve conter 11 dígitos numéricos.

## Critérios de avaliação

Serão avaliados:

- O quão completa está a aplicação comparada a proposta
- Utilização de estruturas aprendidas em sala de aula
- Boas práticas de programação
- Componentização de código
- Reutilização de componentes genéricos
- Proximidade com o template proposto
- Documentação do projeto
- Legibilidade do código
- Manutenibilidade do código

**Não serão permitidos e tolerados (sujeito a perda de pontos, inclusive todos eles)**

- Cópias
- Bibliotecas externas não listadas ou previamente combinadas
- Inserção de conteúdo desrespeitoso ou ofensivo na aplicação
- Edição do projeto após a entrega

## Entrega do Projeto

A entrega deve ser realizada no class a partir de um link para um repositório público com o projeto realizado. A data final para recebimento do trabalho será 25/03/2022, projetos entregues após esta data serão desconsiderados e zerados.

### Manual do usuario

1. Para selecionar um item que irá compor o sanduiche desejado o usuario deve clicar em cima da opção desejada.
2. Para retirar o item selecionado o usuario deve clicar novamente sobre o item selecionado.
3. Para avançar nas etapas da construção do lanche o usuario deve clicar no botão prosseguir, caso o usuario não selecione nada, aquela opção é ignorada e o item não sera computado.
4. Na pagina de checkout o usuario deve preencher corretamente todos os dados de pagamento e só apos concluir o preenchimento o mesmo podera clicar no botão pagar. Caso contrario o botão permanecerá desativado.

## Processo de desenvolvimento

Para esta solução optei por estruturar o codigo seguindo o atom design pattern, afim de separar adequadamente cada componente com foco em manutenabilidade e escalabilidade. Abaixo detalharei a estrutura:

- Pastas

1. Assets: Essa pasta contem todas as imagens do projeto.
2. Atoms: Contem todos os componentes em seu estado atomico, ou seja, não é possivel fragmenta-los em componentes menores.
3. Molecules: Contem componentes que possuem um conjunto de atomos.
4. Organisms: Contem componentes mais complexos que possuem conjuntos de atomos e moleculas.
5. Pages: Contem as paginas da aplicação definidas no arquivo routes
6. Template: Contem a estilização apenas referente a estrutura das paginas. Isto é, não contem nenhuma propriedade de css que não seja referente a posicionamento de elementos na pagina.

- Arquivos:

1. db.js: Este arquivo contem todas as opções descritas no desafio.
2. routes.js: Este arquivo contem o mapeamento das rotas das paginas.

### Tecnologias

- HTML 5
- CSS
- Javascript
- React.JS

### Metodologias

- Atomic design pattern
- Block Element Modifier (BEM)

### O que eu aprendi

- Manipular classes no react
- Deep copy e shallow copy
- Transformar de functional components para class components
- Utilizar states

### Implementacoes futuras

- O usuario não deve poder avançar sem ter escolhido ao menos um item das opções
- Implementar um layout responsivo
- Refatorar os componentes que não estão tão genericos como deveriam ser.

### Recursos uteis

- (http://getbem.com/naming/) - Me ajudou a estruturar meu css, tentei aplicar da melhor forma possivel o Block Element Modifier
- (https://developer.mozilla.org/pt-BR/docs/Web/API/https://andela.com/insights/structuring-your-react-application-atomic-design-principles/) - Esta documentacao me ajudou a entender o o atomic design pattern
- (https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy) - Esta documentação me ajudou a entender a diferença entre deep copy e shallow copy.

## Autor

- Github - [Alexandre-Akira](https://github.com/Alexandre-Akira)
- Frontend Mentor - [@Alexandre-Akira](https://www.frontendmentor.io/profile/Alexandre-Akira)
- Linkedin - [AlexandreAkira](https://www.linkedin.com/in/alexandreakira/)

## Agradecimentos

Gostaria de agradecer o professor da Lets Code [João Paulo](https://github.com/UXJPMN) que me ajudou a exclarecer inumeros conceitos de classes dentro do React, e a propria [Lets Code](https://www.letscode.com.br/) por proporcionar essas experiencias.
