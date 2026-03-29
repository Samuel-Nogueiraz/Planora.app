# Auditoria — testes mobile (Planora)

**Data:** 2026-03-29  
**Base:** plano UX mobile validado (`implementar_ux_mobile_46b6c843.plan.md`) + revisão estática do código + `npm run build` (sucesso).  
**Nota:** não foi possível abrir o site num dispositivo real ou emulador a partir deste ambiente; a validação visual e gestual (swipe, teclado, notch) depende de teste manual no browser (DevTools responsive ou telefone).

**Skill aplicada:** `.cursor/skills/testing/SKILL.md` — cenários, riscos e recomendações, sem redesenho de UI neste documento.

---

## 1. Cenários de teste

### Navegação e layout (≤768px)

| ID | Cenário | O que verificar |
|----|---------|-----------------|
| M1 | Primeira visita em `/` | Sidebar lateral invisível; barra inferior com Hoje, FAB +, Agenda; conteúdo não fica cortado atrás da barra (~80px de folga em `.home__main`). |
| M2 | Navegação Hoje ↔ Agenda | Estado ativo correto em cada botão; rota `/` vs `/planner`; FAB abre modal de nova tarefa nas duas páginas. |
| M3 | Estado vazio (Hoje) | Copy fala em “Toque em **+ Nova tarefa**”; alinha com FAB (ícone só +) — ver secção de problemas. |
| M4 | Planner — scroll horizontal | Cada dia ~75vw; snap horizontal; `scrollIntoView` no “hoje” após mudar semana não quebra o scroll. |
| M5 | Dicas de scroll | Gradientes nos lados de `.planner__grid-shell` indicam mais dias; não bloqueiam toque (`pointer-events: none`). |
| M6 | Modal nova/editar tarefa (≤640px) | Bottom sheet; `padding-bottom` com `env(safe-area-inset-bottom)`; overlay (z-index 1000) cobre bottom-nav (900). |
| M7 | Desktop (>768px) | Bottom-nav oculta; sidebar visível; sem regressão visual (requisito do plano). |

### Edge cases

| ID | Cenário | O que verificar |
|----|---------|-----------------|
| E1 | iPhone com notch / Home Indicator | Barra inferior respeita safe-area; modal não fica escondido atrás da área do sistema. |
| E2 | Teclado virtual (iOS/Android) ao focar inputs no modal | Campos e botões de ação permanecem acessíveis; scroll interno do modal. |
| E3 | Orientação paisagem em telefone ≤768px | Cabeçalho da semana, weekly progress e colunas ainda legíveis; FAB não obstrui toques acidentais. |
| E4 | Zoom do sistema / texto grande | Labels da bottom-nav (11px) podem cortar ou ficar ilegíveis — acessibilidade. |
| E5 | Clicar muito rápido no FAB / duplo tap | Não abrir dois modais ou estado inconsistente (stack de estado React). |
| E6 | Sidebar desktop — “Categorias” | Botão `disabled`, texto “Categorias (em breve)”, opacidade reduzida. |

### Estados de dados

- Vazio, com tarefas, concluir/reverter tarefa, criar sem título (se o form permitir), excluir — mesmos fluxos que desktop; foco em não haver overlap com a bottom-nav ao editar no fundo da lista.

---

## 2. Possíveis problemas

1. **Cor dos gradientes de scroll vs. fundo da página**  
   Os fades em `.planner__grid-shell` usam `var(--bg-primary)` (`#0F0F11` em `variables.css`), enquanto `.planner__main` (e `.home__main`) usam `background-color: #0c0f16` fixo. O degradê pode não fundir de forma perfeita com o “véu” lateral, gerando uma margem visual subtil.

2. **Copy vs. rótulo real no mobile**  
   O hint “+ **Nova tarefa**” sugere texto explícito; na bottom-nav o centro é só o ícone `+`. Utilizadores podem hesitar uma fração de segundo — mais perceptível em teste com pessoas reais.

3. **Viewport / safe-area global**  
   `index.html` tem `viewport` padrão, sem `viewport-fit=cover`. Em alguns iPhones, `env(safe-area-inset-*)` pode comportar-se melhor quando o viewport declara cobertura total — validar em hardware.

4. **`100vh` e barras do browser**  
   Layout usa `min-height: 100vh` na shell; em mobile Safari a barra de URL pode alterar a altura visível e, em casos extremos, afetar sensação de “altura útil” com bottom-nav fixa (problema clássico, não específico deste diff).

5. **Scroll snap vs. primeiro/último dia**  
   Com `scroll-snap-align: center` e colunas largas, o primeiro último dia da semana pode não “descansar” tão bem no centro — confirmar com swipe nos extremos.

6. **Teste não executado em dispositivo real**  
   Gestos, latência do snap, e saltos com `scrollIntoView` + snap podem diferir entre Chrome DevTools e Safari iOS.

---

## 3. Recomendações (o que fazer a seguir)

### Obrigatório antes de considerar mobile “fechado”

1. **Teste manual em 2–3 viewports:** ~390px (iPhone), ~768px limite, e um Android médio. Percorrer M1–M7 e E1–E3.
2. **Safari iOS em concreto:** safe-area, modal bottom sheet, e teclado sobre inputs.
3. **Ajuste fino opcional de cor:** alinhar fundo do planner/home com `--bg-primary` **ou** usar no gradiente a mesma cor que o fundo visível da `main` (eliminar discrepância #0F0F11 vs #0c0f16).

### Melhorias de estabilidade / UX (prioridade média)

4. **Microcopy:** se testes mostrarem dúvida, trocar hint para “Toque no **+** no centro” ou incluir `aria-label` mais descritivo no FAB (já existe `aria-label="Nova tarefa"` — validar leitores de ecrã).
5. **Viewport:** avaliar `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />` e testar `env(safe-area-*)` na bottom-nav e no modal.
6. **Documentar no próprio repositório** uma checklist mínima mobile (esta tabela M/E) para regressões futuras.

### Automação (opcional)

7. **Vitest + Testing Library** cobre sobretudo lógica de componentes; scroll snap e safe-area são maus candidatos a e2e sem Playwright/Cypress com viewport mobile. Se o projeto crescer, considerar poucos testes e2e só para rotas `/` e `/planner` em largura 390px.

---

## 4. Conformidade rápida com o plano (checklist de código)

| Alteração do plano | Estado |
|--------------------|--------|
| Bottom-nav + sidebar coexistem; CSS ≤768px | OK (`Sidebar.jsx`, `Sidebar.css`) |
| Home/Planner full-width + `padding-bottom: 80px` | OK |
| Grid: `scroll-snap-type`; colunas `min-width: 75vw`, `scroll-snap-align: center` | OK |
| Gradientes em `.planner__grid-shell` | OK |
| Categorias `disabled` + “(em breve)” | OK |
| Copy vazio sem “sidebar” | OK |
| ProgressHeader compacto ≤768px | OK |
| Modal safe-area em `@media (max-width: 640px)` | OK |

---

## 5. Resumo

A implementação alinha-se com o plano e o **build passa**. O passo crítico em falta é **validação em dispositivo real e Safari iOS**, mais um **ajuste de cor dos gradientes** se o contraste com o fundo `#0c0f16` for visível. O restante é refinamento (copy, viewport-fit, possíveis testes e2e).
