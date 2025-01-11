<h1 align="center">
    Portfolio Profissional
</h1>

Este portfólio tem como objetivo apresentar minha trajetória profissional e acadêmica, destacando meus connhecimentos técnicos, projetos realizados e formas de contato. Desenvolvido utilizando Angular, o portfólio inclui informações sobre minhas habilidades, projetos desenvolvidos ao longo dos anos, e um meio de comunicação direto através de formulários de contato. Sinta-se à vontade para explorar os projetos, entrar em contato ou até mesmo colaborar.   


## Objetivo   

O objetivo principal deste portfólio é fornecer uma plataforma interativa que mostre:   

- **Sobre Mim:** Um resumo da minha formação acadêmica, experiência profissional e habilidades.   
- **Projetos:** Apresentação detalhada de projetos de desenvolvimento web, APIs e sistemas criados ao longo da minha carreira.   
- **Contato:** Formulário de contato para possíveis colaborações ou oportunidade de emprego.   


## Estrutura do Projeto   

A estrutura do projeto foi organizada de forma modular, garantindo que o código seja limpo, escalável e fácil de manter. A seguir está a descrição das principais pastas e arquivos:   


```   
portfolio/
│
├── public/                     # Arquivos públicos
├── src/
│   ├── app/                    # Componente principal do aplicativo
│   │   ├── about/              # Componente Sobre Mim
│   │   ├── contact/            # Componente de Contato
│   │   ├── home/               # Componente Home
│   │   ├── projects/           # Componente Projetos
│   │   
│   ├── assets/                 # Outras imagens e recursos estáticos
│   ├── index.html              # Arquivo HTML principal
│   ├── main.ts                 # Arquivo de inicialização do Angular
│   └── styles.css              # Arquivo de estilos globais
├── package.json                # Gerenciamento de pacotes e scripts

```   

## Funcionalidades Principais   

**1. Página Inicial (Home)**   

- Introdução pessoal con informações básicas e uma foto profissional.   
- Link para download do currículo em formato PDF.
- Apresentação resumida das principais tecnologias e ferramentas que utilizo.   

**2. Sobre Mim (About)**   

- Descrição da minha trajetória acadêmica e profissional.   
- Linha do tempo interativa destacando marcos importantes da minha formação.   
- Seção de habilidades técnicas, destacando minhas competências em diferentes áreas de desenvolvimento.   

**Projetos (Projects)**   

- **Exibição de Projetos:** Cada projeto apresenta informações como:   

   - Nome do projeto.
   - Descrição detalhada do que foi desenvolvido.   
   - Tecnologias utilizadas.   
   - Links para repositórios no GitHub e visualização ao vivo, quando disponível.   

- **Filtro por Tecnologia:** O visitante pode filtrar os projetos com base nas tecnologias utilizadas (JavaScript, Node.js, Java, Spring Boot, etc.).   

**4. Contato (Contact)**   

- Formulário de contato integrado com EmailJS para envio direto de mensagens.   
- Links para minhas redes sociais, como Linkedin e GitHub.   

**5. Navegação e Responsividade**   

- Menu de navegação fixo para facilitar o acesso às seções do portfólio.   
- O layout é totalmente responsivo, adaptando-se perfeitamente a diferentes dispositivos, como tablets e smartphones.   
- Suporte a Dark Mode, com alternância de tema entre claro e escuro.   


## Tecnologias Utilizadas   

- **Frontend:**   

   - Angular   
   - Angular Material   

- **Backend (Para Formulários):**   

   - **EmailJS** (para envio de mensagens via formulário de contatos)   

- **Outras Ferramentas:**   

   - GitHub (para armazenamento de projetos)
   - Vite (ferramenta de build)   

**Instalação e Execução**   

**Passos para Execução Local:**   

1. Clone o repositório:   

```   
git clone https://github.com/Gilvan-R-A/portfolio
```  

2. Navegue até a pasta do projeto:   

```   
cd portfolio   
```   

3. Instale as dependências:   

```   
npm install
```   

4. Inicie o servidor de desenvolvimento:   

```   
ng serve
```   

5. Acesse o portfólio:   

O portfólio estará disponível em http://localhost:3000


## Funcionalidades de Personalização   

- **Dark Mode:** O usuário pode alternar entre os modos claro e escuro clicando no ícone localizado na parte superior direita da página.   

- **Responsividade:** O layout se ajusta automaticamente para diferentes tamanhos de tela, garantindo uma experiência fluida em dispositivos móveis e tablets.   

- **Animações:** Uso de Angular Animation para transições e animações de rolagem suave.

