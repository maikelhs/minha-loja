# 🧥 Loja Premium Masculina

## 📌 Registro do Projeto

Projeto de uma **landing page** (página única) para comercializar uma pequena coleção de roupas masculinas premium. A proposta inclui um filtro inteligente de clientes antes de redirecioná-los para o WhatsApp com uma mensagem personalizada, sem o uso do Facebook.

---

## 🎯 Objetivo Inicial

Criar uma página web com as seguintes características:

- Apresentar produtos de forma visual e moderna.
- Filtrar o cliente por **tamanho** e **cidade**.
- Redirecionar para o **WhatsApp** com mensagem automática.

---

## 🚧 Etapas do Projeto

### ✅ Passo 1: Estrutura e Conteúdo (HTML)

- Criado o arquivo `index.html` com estrutura base.
- Definido título da página e uma tagline de marketing com foco em **confiança e estilo**.
- Criada a **Galeria de Produtos** (`<div class="product-gallery">`) com 4 cards contendo:
  - Imagem
  - Título
  - Descrição
  - Preço
- Implementado o **Formulário de Qualificação** com:
  - Dropdown para **Tamanho** (P a G4)
  - Campo de texto para **Cidade**
  - Dropdown para **Forma de Entrega** (Retirar / Tele-entrega)
  - Botão de envio e mensagens de erro

---

### ✅ Passo 2: Estrutura de Pastas e Estilo (CSS)

**Estrutura de pastas:**

minha-loja/
├── index.html
└── assets/
├── css/
│ └── style.css
├── js/
│ └── script.js
└── imagens/


- Criado o arquivo `assets/css/style.css` e aplicado estilo global.
- Usado `display: grid` com `auto-fit` e `minmax` para galeria responsiva.
- Adicionados `@media queries` para melhor visualização em dispositivos móveis.
- Corrigidos caminhos de arquivos no `index.html` (`href`, `src`).

---

### ✅ Passo 3: Lógica e Interatividade (JavaScript)

- Criado `assets/js/script.js`
- Lógica do formulário:
  - Executa após `DOMContentLoaded`
  - Impede envio padrão (`event.preventDefault()`)
  - Verifica se:
    - Tamanho é **M, G ou GG**
    - Cidade é **"guaíba"**
  - Se inválido, exibe erro ao usuário
  - Se válido, redireciona com link WhatsApp preenchido

- Corrigido bug da mensagem de erro não aparecer (erro no caminho do `script.js`).

---

### ✅ Passo 4: Funcionalidade Avançada – Carrossel de Imagens

- Integrado o **Swiper.js** (via CDN):

**HTML**:
- Inserida estrutura do carrossel

**CSS**:
- Estilizado com `object-fit: contain`
- Largura de `60%` em desktops e `100%` em mobile

**JavaScript**:
- Inicializado com:
  - `loop`
  - `autoplay`
  - `pagination` (bolinhas)
  - `navigation` (setas)
  - `slidesPerView: 1`
  - `centeredSlides: true`

---

## 🚀 Próximos Passos

- ✅ Preparar o site para **publicação**
- 🔒 Decisão: evitar servidores próprios sem HTTPS
- 🌐 Melhor opção:
  - Usar hospedagem gratuita para sites estáticos, como:
    - [Netlify](https://www.netlify.com/)
    - [GitHub Pages](https://pages.github.com/)
  - Registrar um domínio acessível (cerca de **R$ 40/ano**)

---

## 📝 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Grid Layout, Media Queries)
- **JavaScript (Vanilla JS)**
- **Swiper.js** (via CDN)

---

## 💬 Prompt para Continuação

> Olá, Gemini! Estamos a continuar o desenvolvimento do meu site de página única para a minha loja de moda masculina premium. O projeto foi construído com HTML, CSS e JavaScript puros, e já tem uma estrutura de pastas organizada.
>
> **Estado atual:**
> - Carrossel com Swiper.js
> - Galeria responsiva com produtos
> - Formulário que qualifica o cliente e redireciona para o WhatsApp
>
> **Próximo passo:** Publicar o site e conectar com domínio.

---

## 📎 Créditos e Licença

Este projeto é de uso pessoal e educacional. Sinta-se livre para contribuir ou clonar para estudo.

---

