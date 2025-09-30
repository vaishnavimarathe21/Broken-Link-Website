Deadlink-Hunter🕵️

Deadlink-Hunter é um projeto open-source projetado para encontrar links quebrados em repositórios do GitHub (com suporte futuro para outras plataformas).
O objetivo é ajudar mantenedores a manter sua documentação limpa, confiável e sem frustrações para os leitores.

Este é o design geral desejado para o site, gerado pelo Lovable, apenas para servir como inspiração.

<img width="1884" height="895" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

Você pode conferir a UI mais elaborada
 que foi criada com base44 como inspiração inicial neste link:

O porquê

A documentação é o primeiro ponto de entrada para a maioria dos desenvolvedores explorando um projeto.
Ainda assim, arquivos README e docs frequentemente contêm links desatualizados ou quebrados – mesmo em repositórios grandes e bem mantidos.

Mas já não existem verificadores de links quebrados?
Existem — mas a maioria deles não tem boa aparência, suas UIs não são amigáveis, e sua detecção de links quebrados não cobre todos os casos (por exemplo, localhost:4000 não está realmente quebrado).

Contribuindo

Contribuições são bem-vindas e muito apreciadas!

Para contribuir:

Fork este repositório para sua própria conta do GitHub.

Clone seu fork localmente:

git clone https://github.com/<seu-usuario>/Deadlink-Hunter.git
cd Deadlink-Hunter


Instale as dependências usando pnpm (por favor, não use npm ou yarn):

pnpm install


Crie um novo branch para sua feature ou correção:

git checkout -b minha-feature


Faça suas alterações e faça commits com mensagens claras.

Envie seu branch para o fork:

git push origin minha-feature


Crie um Pull Request do branch do seu repositório para o branch main do repositório original.

Instale as dependências usando pnpm (por favor, não use npm ou yarn):

pnpm install

Crie um novo branch para sua feature ou correção:

git checkout -b minha-feature

Faça suas alterações e faça commits com mensagens claras.

Envie seu branch para o fork, e crie pull requests do seu repositório para o branch main dentro do repositório original.

Template Mantine Vite
Funcionalidades

Este template vem com as seguintes funcionalidades:

PostCSS
 com mantine-postcss-preset

TypeScript

Storybook

Vitest
 configurado com React Testing Library

ESLint configurado com eslint-config-mantine

Scripts pnpm
Scripts de build e desenvolvimento

dev – inicia o servidor de desenvolvimento

build – gera a versão de produção do app

preview – visualiza localmente a build de produção

Scripts de testes

typecheck – verifica os tipos do TypeScript

lint – executa o ESLint

prettier:check – verifica arquivos com Prettier

vitest – executa os testes do vitest

vitest:watch – inicia o vitest em modo watch

test – executa vitest, prettier:check, lint e typecheck

Outros scripts

storybook – inicia o servidor de desenvolvimento do Storybook

storybook:build – gera a build de produção do Storybook em storybook-static

prettier:write – formata todos os arquivos com Prettier
