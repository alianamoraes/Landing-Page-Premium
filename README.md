# 🍔 Melhor Opção Lanches - Mogi das Cruzes

> Landing page corporativa de alta conversão, responsiva e otimizada para o setor de delivery de alimentação da rede **Melhor Opção Lanches**, em Mogi das Cruzes - SP.

Este projeto foi concebido e desenvolvido sob rígidos padrões de UI/UX Mobile-First, com o objetivo de centralizar os canais de atendimento das múltiplas unidades, impulsionar a conversão através do ecossistema Google e fortalecer o posicionamento digital da marca.

---

## 🚀 Principais Recursos e Engenharia de UI/UX

- **Arquitetura Multi-Unidade Dinâmica:** Seletor inteligente de praça de entrega que segmenta o fluxo de clientes e direciona chamadas/mensagens diretamente para os contatos específicos de cada unidade, mitigando erros operacionais de logística.
- **Grid de Produtos Simétrico e Padronizado:** Implementação de contêineres de mídia rígidos com proporção de tela controlada via CSS (`aspect-[4/3]`) e preenchimento adaptativo inteligente (`object-cover`). Garante simetria matemática visual perfeita na listagem de lanches e porções, independentemente da proporção ou ausência de descritivos textuais nas fotos originais.
- **Chamada para Ação (CTA) Estratégica:** Botão de conversão principal integrado de forma fluida ao fluxo de navegação, roteando o tráfego do usuário diretamente para a API de pedidos nativa do Google Search Viewer do estabelecimento.
- **Identidade Visual Premium Dual-Theme:** Suporte nativo a Modo Claro (Light Mode) e Modo Escuro (Dark Mode). Toda a interface herda uma paleta de cores proprietária em Charcoal Black e Signature Red, mantendo o contraste de acessibilidade e o apelo comercial gastronômico em ambas as versões.
- **Acessibilidade de Atendimento (Floating Action):** Botão flutuante de atendimento persistente com microinterações de pulsação orgânica via CSS keyframes, otimizando o tempo de resposta e contato do usuário móvel sem causar quebras de layout (*layout shifts*).
- **Feed Social Sincronizado:** Componentização e injeção dinâmica de scripts para renderização do feed oficial do Instagram em tempo real no rodapé do ecossistema.

---

## 🛠️ Stack Tecnológica

- **React.js** – Arquitetura de componentes modularizada, reativa e component-driven.
- **Tailwind CSS** – Framework utilitário de estilização para desenvolvimento mobile-first ágil e folhas de estilo otimizadas de baixo peso.
- **Lucide React** – Conjunto de ícones vetoriais de alta fidelidade e escalabilidade (SVG).
- **Shadcn UI** – Primitivas de componentes de interface acessíveis e altamente customizáveis.
- **TypeScript** – Tipagem estática para maior previsibilidade de código e segurança em ambiente de produção.

---

## 📦 Inicialização e Desenvolvimento Local

Certifique-se de ter o Node.js e o gerenciador de pacotes de sua preferência instalados em sua máquina.

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Acessar o diretório do projeto:**
   ```bash
   cd Landing-Page-Premium
   ```

3. **Instalar as dependências de escopo:**
   ```bash
   npm install
   # ou
   pnpm install
   ```

4. **Executar o ambiente de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

5. **Gerar build de produção para deploy:**
   ```bash
   npm run build
   # ou
   pnpm build
   ```

---
*Desenvolvido por Aliana Moraes de forma independente como solução comercial de software de alta performance para o comércio alimentício regional de Mogi das Cruzes.*
