Deadlink-Hunter 🕵️

O Deadlink-Hunter é um projeto open source criado para detectar links quebrados em repositórios do GitHub (com planos de suportar outras plataformas no futuro).
O objetivo é ajudar mantenedores a manter a documentação dos seus projetos limpa, confiável e sem frustrações para quem lê.

O design abaixo foi gerado pelo Lovable e serve apenas como inspiração:

<img width="1884" height="895" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

Você também pode conferir uma versão mais elaborada da interface
, criada com o Base44, neste link.

Por que isso importa?

A documentação é, muitas vezes, o primeiro ponto de contato de um desenvolvedor com um projeto.
Mas é comum encontrar links desatualizados ou quebrados em READMEs e docs — até mesmo em repositórios grandes e bem cuidados.

Mas já não existem ferramentas para verificar links quebrados?
Sim, existem. Mas a maioria não tem uma interface amigável, não cobre todos os casos (ex.: localhost:4000 não é realmente um link quebrado) e não são tão práticas para o dia a dia.

Como contribuir

Contribuições são super bem-vindas! 🙌

Para participar:

Forke este repositório para a sua conta do GitHub.

Clone o fork localmente:

git clone https://github.com/<seu-usuario>/Deadlink-Hunter.git
cd Deadlink-Hunter


Instale as dependências com pnpm (⚠️ não use npm ou yarn):

pnpm install


Crie uma branch para sua contribuição:

git checkout -b minha-feature


Implemente suas alterações e faça commits com mensagens claras.

Envie a branch para o seu fork:

git push origin minha-feature


Abra um Pull Request da sua branch para a branch main do repositório original.

Template Mantine Vite

Este projeto utiliza um template baseado em Mantine + Vite, com várias ferramentas úteis já configuradas.

Recursos inclusos

PostCSS
 com mantine-postcss-preset

TypeScript

Storybook

Vitest
 integrado ao React Testing Library

ESLint configurado com eslint-config-mantine

Scripts disponíveis (pnpm)
Desenvolvimento e build

dev – inicia o servidor de desenvolvimento

build – gera a versão de produção

preview – faz o preview local do build de produção

Testes

typecheck – checa os tipos do TypeScript

lint – roda o ESLint

prettier:check – verifica a formatação com Prettier

vitest – executa os testes

vitest:watch – roda os testes em modo observação

test – executa todos os scripts de verificação (vitest, prettier:check, lint, typecheck)

Outros

storybook – inicia o Storybook em modo desenvolvimento

storybook:build – gera o Storybook em versão de produção na pasta storybook-static

prettier:write – formata todos os arquivos automaticamente com Prettier