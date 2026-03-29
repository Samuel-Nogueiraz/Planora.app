# Auditoria UX — mobile e ecrãs estreitos (Planora)

Documento gerado a partir da revisão do código em `src/` (março 2026). Viewport de referência: ~360×640 (telefone) e ~768×1024 (tablet).

---

## 1. Auditoria por ecrã e fluxo

### Meta (`index.html`)

- `viewport` com `width=device-width, initial-scale=1` — adequado para escala em telemóvel.

### Navegação global — `Sidebar.jsx` + `Sidebar.css`

- **Layout:** sidebar fixa com `width: clamp(220px, 20vw, 280px)`, `position: sticky`, sem colapso nem drawer em breakpoints pequenos.
- **Fluxo:** logo → “Nova tarefa” → links (Hoje, Agenda, Categorias) → rodapé utilizador.
- **Fricção em ~360px:** a área útil para `main` fica ~80–140px (360 − 220 a 280), praticamente inutilizável para o planner e muito apertada para Home.
- **Itens:** “Categorias” tem `path: null`; o botão chama `navigate(null)` — em teoria pode não mudar de rota (depende do React Router); experiência ambígua em qualquer largura.

### Home — `HomePage.jsx` + `HomePage.css`

- **Fluxo:** cabeçalho de progresso → lista do dia → CTA “Abrir agenda completa”.
- **Pontos positivos:** coluna única de tarefas funciona bem conceptualmente em mobile; `home__main` tem `overflow: auto`.
- **Fricção:** estado vazio menciona “sidebar” e “Nova tarefa na sidebar” — em ecrã muito estreito com sidebar sempre visível, o texto ainda faz sentido, mas o **espaço** para ler tarefas é o problema estrutural (sidebar).
- **Toque:** `TaskCard` abre edição ao clicar no cartão inteiro — bom para alvos grandes (ver `TaskCard.jsx`).

### Planner — `PlannerPage.jsx` + `PlannerPage.css` + `DayColumn.css`

- **Fluxo:** semana com setas → grelha de 7 dias (scroll horizontal) → progresso semanal.
- **Implementação:** `.planner__grid` com `display: flex`, `overflow-x: auto`; cada `.day-column` com `flex: 1` e `min-width: 140px` — em teoria as colunas **encolhem** até 140px dentro do contentor scrollável; o scroll horizontal aparece quando a soma mínima (7×140 = 980px) excede a largura **do contentor** (área do `main`, não do viewport inteiro).
- **Comportamento útil:** `useLayoutEffect` com `scrollIntoView({ inline: 'center' })` no dia “hoje” — melhora descoberta da coluna atual após mudar de semana.
- **Fricção:** com sidebar a robar largura, o utilizador vê uma **faixa horizontal** estreita; muitas colunas com texto e cartões em 140px aumentam densidade e leitura difícil. Navegação semanal por setas é clara; a relação “estou a ver um dia de sete” pode não ser óbvia sem indicador de scroll (pista visual ou chip “desliza para ver mais dias”).
- **Breakpoint atual:** `max-width: 900px` só ajusta gaps/fonte do cabeçalho da semana, não o modelo da grelha nem a sidebar.

### Modais — `Modal.jsx` + `Modal.css` + `TaskFormModal`

- **Pontos positivos:** `body { overflow: hidden }` enquanto aberto; em `max-width: 640px` overlay com `align-items: flex-end` e painel em largura total — padrão próximo de *bottom sheet*, bom para teclado e polegares.
- **Formulário:** `@media (max-width: 640px)` — grelha meta e horários em coluna única; ações em coluna com botões full width — alinhado a `.cursor/components/Modals.md`.
- **Fricção residual:** foco trap / `Escape` para fechar não foram verificados no código; teclado virtual pode ainda encobrir o último campo em alguns browsers (mitigação típica: `scroll-padding` ou scroll do modal para o focused input).

### Feedback de ações

- **Guardar / eliminar tarefa:** estado local imediato (`useTasks`) — sem loading explícito; aceitável para MVP offline/mock.
- **Sem toast ou mensagem** após criar/editar — não é bloqueante dado fecho imediato do modal e lista atualizada.

### Tablet (~768px)

- Mesmos problemas em grau menor: sidebar ~220px + main ~548px; planner ainda força scroll horizontal com colunas estreitas.

---

## 2. Fricções priorizadas (3–5) e tipo de trabalho

| Ordem | Fricção | Tipo principal | Notas |
|------|---------|----------------|--------|
| **1** | Sidebar sempre larga em telemóvel — área do conteúdo principal esmagada | **UX** (navegação / hierarquia) + **técnico** (layout responsivo) | Maior impacto em Home e Planner; precisa padrão colapsável (drawer, bottom nav, ou top bar). |
| **2** | Planner em 7 colunas com `min-width: 140px` num contentor estreito — leitura e toque densos | **UX** (densidade, modelo mental da semana) | Relacionado com decisão de padrão (secção 3). |
| **3** | Falta de pista explícita de “há mais dias” no eixo horizontal (indicadores, gradiente, ou texto) | **UX** | Especialmente para utilizadores que não associam scroll horizontal à agenda. |
| **4** | Item “Categorias” sem destino claro | **UX** + **produto** | Evitar clique morto ou desabilitar com estado “em breve”. |
| **5** | Estado vazio da Home centrado em “sidebar” | **UX** (copy) | Ajustar para “Nova tarefa” acima/drawer quando a navegação móvel mudar. |

*Ajustes puramente **UI** (cores, tipografia fina) foram deixados de fora, conforme separação da skill UX vs design-ui.*

**Ordem sugerida de correção:** (1) layout navegacional móvel → (2) padrão do planner em ecrã estreito → (3) pistas de scroll / copy → (4) categorias.

---

## 3. Decisão de padrão: planner em ecrã estreito

**Recomendação:** manter **scroll horizontal entre dias** como base **após** corrigir a largura útil (sidebar colapsada ou navegação alternativa), **e** acrescentar um **modo ou realce híbrido** para o “dia de hoje”:

- **Porquê não saltar logo para “lista só do dia”:** o código já investe em foco semanal (`computeDayFocusLevel`, `scrollIntoView` no dia atual). Uma lista única por dia exigiria novo modelo de navegação (picker de dia ou tabs) e mais alterações de produto.
- **Porquê não só horizontal estreito:** com ~140px por coluna e pouca largura total, a **densidade** permanece alta; após dar largura ao `main`, o horizontal continua válido para “ver a semana de relance”.
- **Híbrido mínimo sugerido (próximo passo de implementação):**  
  - **Curto prazo:** garantir largura mínima do contentor do planner ≥ ~min(100vw menos navegação, 100%).  
  - **Médio prazo:** opcional — em `max-width: 640px` (ou similar), mostrar **um dia em destique** (ex.: coluna “hoje” com `flex: 1 1 85%` e restantes como *peek* / scroll), ou secção “Hoje” repetida no topo com link “Ver semana” — a validar com testes rápidos com utilizadores.

**Padrão escolhido para documentação:** **scroll horizontal da semana (atual) + correção de navegação/layout móvel + reforço de descoberta do eixo horizontal;** evoluir para variante híbrida “hoje em destaque” se, após (1), a fricção da densidade continuar alta.

---

## 4. Fluxo ideal alvo (referência)

1. Entrar na app → **contexto de dia/semana** visível sem procurar (Home ou Planner com “hoje” óbvio).
2. Navegação móvel **acessível num toque** (menu ou barra inferior) sem roubar largura permanente ao conteúdo.
3. No planner → perceber que **existem mais dias** (scroll horizontal ou navegação explícita).
4. Tocar tarefa → modal com ações claras → fechar com estado atualizado.
5. Feedback mínimo: pelo menos ausência de “cliques mortos” e estados de erro futuros quando existir API.

---

## 5. Ficheiros revistos

- `src/App.jsx`, `index.html`
- `src/pages/HomePage.jsx`, `HomePage.css`
- `src/pages/PlannerPage.jsx`, `PlannerPage.css`
- `src/components/Sidebar.jsx`, `Sidebar.css`
- `src/components/DayColumn.jsx`, `DayColumn.css`
- `src/components/Modal.jsx`, `Modal.css`
- `src/components/TaskFormModal.jsx`, `TaskFormModal.css` (parcial)
- `src/components/TaskCard.jsx`, `ProgressHeader.jsx`
- `src/hooks/useTasks.jsx`
