# Alterações do Planner — registro de contexto (sessão)

Documento com as mudanças feitas no fluxo do **Planner** alinhadas a `.cursor/UpdatePlanner.md`, skills de UI/UX e evoluções posteriores (foco nos dias + scroll).

---

## 1. `src/pages/PlannerPage.css`

Objetivo: hierarquia de valor (progresso semanal visível cedo), layout mais leve e menos rolagem concorrente na página.

| Área | Alteração |
|------|-----------|
| **`.planner__main`** | `display: flex; flex-direction: column;`, `overflow: hidden`, `min-height: 0`, padding reduzido (`--space-sm` / `--space-md`). |
| **`.planner__content`** | `flex: 1`, `min-height: 0`, `gap: var(--space-sm)`, `max-width: 1320px` (com ajuste em telas ≤1440px). |
| **Ordem visual (flex `order`)** | `header` → `order: 1`; `.weekly-progress` → `order: 2`; `.planner__grid-shell` → `order: 3`. O DOM ainda declara o progresso depois da grade; o CSS reordena para o progresso aparecer **abaixo do cabeçalho e acima da grade**. |
| **`.planner__content > .weekly-progress`** | Destaque (fundo, borda azul suave, sombra leve), `flex-shrink: 0`. |
| **Cabeçalho semanal** | Padding e tipografia do eyebrow reduzidos; linha de navegação com gap menor. |
| **`.planner__nav-btn`** | Botões **40×40px**, estados `:hover`, `:active`, `:focus-visible` com melhor contraste. |
| **`.planner__week-label`** | Tamanho ~18px, `max-width` para não estourar em telas estreitas; media queries em 1440px e 900px. |
| **`.planner__grid-shell`** | `flex: 1`, `min-height: 0`, `overflow: hidden`, container em coluna para a altura ir para a grade; **padding `4px`** (antes 6px) para ganhar espaço na grade sem mudar a estrutura. |
| **`.planner__grid`** | `min-height: 0`, `overflow-x: auto`, `overflow-y: hidden`, `scrollbar-gutter: stable`; **gap `4px`** (antes 6px) entre colunas. |
| **`.planner__header-card`** | **Largura limitada e centralizada:** `align-self: center`, `width: 100%`, `max-width: min(100%, 560px)` — reduz ocupação horizontal do bloco de navegação (eyebrow + setas + rótulo), mantendo padding e altura percebida. |

**Critério de produto:** progresso semanal legível sem precisar rolar a página inteira; rolagem vertical das tarefas permanece nas colunas (`DayColumn`).

---

## 2. `src/pages/PlannerPage.jsx`

### 2.1 Foco visual por dia (`computeDayFocusLevel`)

- Calcula **`primary`** / **`secondary`** / `null` por índice da semana (0 = domingo … 6 = sábado), **somente quando a semana exibida contém o dia de hoje** (`todayIndexInWeek >= 0`).

| Situação | Comportamento |
|----------|----------------|
| **Meio da semana** | `primary` = hoje; `secondary` = dia anterior e próximo **na mesma grade**. |
| **Hoje = domingo** | `primary` = domingo; `secondary` = segunda (sem “dia anterior” na semana). |
| **Hoje = sábado** | `primary` = sábado **somente** (sem sexta como secundário). |
| **Semana sem “hoje”** (navegação para outra semana) | Nenhum nível de foco. |

- Props por coluna: `focusLevel` passado para `DayColumn`.
- `ref` na coluna com foco **primário** (`todayColumnRef`) para o scroll horizontal (ver abaixo).

### 2.2 Scroll horizontal para o dia atual

- `useRef` + `useLayoutEffect` após definir `todayIndexInWeek`.
- Se `todayIndexInWeek >= 0`, a coluna com foco primário chama `scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })` dentro de `requestAnimationFrame`.
- Dependências: `weekStart`, `todayIndexInWeek`.

### 2.3 Imports

- `useRef`, `useLayoutEffect` adicionados aos imports do React.

---

## 3. `src/components/DayColumn.jsx`

- Componente convertido para **`forwardRef`**; o `ref` é aplicado no `<div>` raiz da coluna.
- Nova prop **`focusLevel`**: `'primary' | 'secondary' | null/undefined`.
- Classes condicionais: `day-column--focus-primary`, `day-column--focus-secondary` (além de `day-column--today` quando aplicável).
- `displayName = 'DayColumn'` para depuração.

---

## 4. `src/components/DayColumn.css`

| Classe | Efeito |
|--------|--------|
| **`.day-column`** | `position: relative`; `scroll-margin-inline: var(--space-xs)` (ajuda ao centralizar com `scrollIntoView`); **`min-width: 140px`** (antes 160px) para estabilizar a grade em viewports com scroll horizontal. |
| **`.day-column--focus-primary`** | Borda **1px** (não 2px) + sombras reforçadas (`box-shadow` em camadas, incl. anel `0 0 0 2px` em azul), `z-index: 2`, `translateY(-2px)` — destaque forte **sem** aumentar a largura da coluna em relação às outras (evita “estouro” do flex). |
| **`.day-column--focus-secondary`** | Borda e sombra mais leves, `z-index: 1`, `translateY(-1px)`. |
| **`.day-column--today`** | Mantém cores de label/badge/número para “HOJE”; o destaque de borda forte passou a depender principalmente de `--focus-*`. |

---

## 5. `src/components/WeeklyProgress.css` (ajuste visual — gradiente Planora)

| Área | Alteração |
|------|-----------|
| **`.weekly-progress__bar`** | `border-radius: 999px` (trilho tipo pill), `overflow: hidden` mantido. |
| **`.weekly-progress__fill`** | Gradiente **90deg** `var(--action-primary)` → `var(--status-pending)` (~42%) → `var(--status-completed)` (pendente → concluído, alinhado a tokens e ao `ProgressHeader`); `border-radius: 999px` para coincidir com a trilho. |

O posicionamento do bloco na página continua sendo definido em **`PlannerPage.css`** (flex `order` + estilos em `.planner__content > .weekly-progress`). **`WeeklyProgress.jsx`** não foi alterado para esse ajuste.

---

## 6. Arquivos não alterados nesta rodada (referência)

- **`WeeklyProgress.jsx`**: sem mudanças; apenas CSS da barra/trilho.
- **`PlannerPage.jsx`**, **`plannerFocus.js`**: sem alterações nos ajustes puramente visuais da grade/cartão/barra.
- **Plano em `.cursor/plans/`**: não editado pelo fluxo de implementação (regra da sessão original).

---

## 7. Como validar rapidamente

1. Semana **atual**: coluna de **hoje** com destaque primário (borda 1px + sombra); vizinhos (ou segunda no domingo / só sábado no sábado) com secundário; grade rola para centralizar o dia atual.
2. **Outra semana** (setas): sem foco nas colunas; sem scroll automático para “hoje”.
3. **Notebook** (~1366–1440px): progresso visível no topo da área principal; grade não “pesa” mais que o necessário.
4. **Cartão de semana**: bloco de navegação mais estreito e centralizado; **barra de progresso** com gradiente azul → verde perceptível.
5. **Desktop / estreito** (~1280px, ~1024px, ~390px): sem clipping estranho no shell; ao trocar semana ou foco, sem “pulo” de layout por causa de borda (foco primário não aumenta largura da coluna).

---

*Última atualização: ajustes de UI do Planner (cartão de navegação, gradiente da barra semanal, colunas mais estreitas + foco sem borda 2px) documentados acima.*
