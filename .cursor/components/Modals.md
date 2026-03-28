# Modais — Planora

Documento de referência para o padrão visual e de comportamento dos modais, alinhado à implementação atual (`Modal`, `TaskFormModal`).

---

## Objetivo

Garantir que todo modal do Planora seja **consistente**, **acessível** e **previsível**: fundo escuro com glassmorphism, borda com brilho ciano → roxo, hierarquia clara e fechamento óbvio.

---

## Componente base

- **Arquivos:** `src/components/Modal.jsx`, `src/components/Modal.css`
- **Uso:** envolver o conteúdo específico da tela (formulário, confirmação, etc.) dentro de `<Modal title="…">…</Modal>`.

### Estrutura obrigatória

1. **Overlay** (`.modal-overlay`): cobre a viewport, fecha ao clicar fora do painel.
2. **Painel** (`.modal`): contém header + corpo; cliques **não** propagam para o overlay (`stopPropagation`).
3. **Cabeçalho** (`.modal__header`): título + botão fechar; fica **sticky** no topo ao rolar conteúdo longo.
4. **Corpo** (`.modal__body`): padding interno; aqui entra o conteúdo (ex.: formulário).

---

## Comportamento

- **Abertura:** controlada por prop `isOpen`; quando `false`, o modal não renderiza (`return null`).
- **Scroll da página:** com o modal aberto, `document.body.style.overflow = 'hidden'`; restaurar no cleanup do efeito.
- **Fechar:** overlay (clique fora), botão fechar e callbacks explícitos da feature (ex.: “Descartar”).
- **Não** fechar ao clicar dentro do painel por acidente: o painel intercepta o clique.

---

## Acessibilidade

- O painel usa `role="dialog"`, `aria-modal="true"` e `aria-labelledby` apontando para o `id` do título (gerado com `useId()`).
- O botão de fechar deve ter `type="button"` e `aria-label` descritivo (ex.: “Fechar modal”).
- Estados de foco visíveis: pelo menos `:focus-visible` no botão fechar (anel suave em ciano).

---

## Linguagem visual (shell do modal)

| Aspecto | Diretriz |
|--------|----------|
| **Tema** | Dark mode; texto principal claro (`#f8fafc` no título). |
| **Overlay** | Fundo escuro semitransparente com **radiais** suaves (azul no topo, roxo no canto inferior direito) e **backdrop-filter: blur**. |
| **Painel** | Fundo em gradiente vertical escuro; **border-radius ~22px** no desktop; sombra profunda + highlight interno sutil. |
| **Borda “neon”** | Gradiente **ciano → branco suave → roxo** no contorno (pseudo-elemento com máscara), sem interferir em cliques (`pointer-events: none`). |
| **Acento decorativo** | Opcional: glow roxo suave no canto (`::after`), apenas visual. |
| **Largura** | `max-width: 560px` no desktop; em telas estreitas, painel pode ir à largura quase total e ancorar embaixo (`align-items: flex-end` no overlay). |
| **Altura** | `max-height: min(92vh, 820px)` com scroll vertical no painel quando necessário. |
| **Animação** | Entrada curta: fade + leve `translateY` / `scale` no painel; fade no overlay. |
| **z-index** | Overlay em camada alta (ex.: `1000`), acima do layout principal. |

**Paleta de referência (mock / gradientes):** ciano `#00D2FF`, roxo `#9D50BB` — usar como guia para bordas, botões primários e estados de destaque nos formulários dentro do modal.

---

## Conteúdo dentro do modal (ex.: formulário de tarefa)

O arquivo `src/components/TaskFormModal.css` define o padrão para **formulários** dentro do `Modal`:

- **Campos:** fundo escuro, borda fina cinza/azulada, cantos arredondados (~12px), foco com borda ciano e halo suave.
- **Grid:** metadados em duas colunas no desktop (ex.: dia + frequência); uma coluna no mobile.
- **Seleção em chips (pills):** categorias e prioridades como `radio` estilizado; estado selecionado com borda/acento por categoria ou prioridade.
- **Ações no rodapé:** separador sutil; botão primário com **gradiente ciano → azul → roxo**; secundário outline escuro; ação destrutiva (ex.: excluir) com estilo “danger” discreto à esquerda quando existir.

Novos modais que contenham formulários devem **reutilizar** essas classes ou extrair tokens equivalentes para não divergir do sistema.

---

## Como criar um modal novo

1. Importar `Modal` e passar `isOpen`, `onClose`, `title` e `children`.
2. Manter **lógica de negócio** fora do `Modal` (na página ou hook); o `Modal` só encapsula apresentação e fechamento superficial.
3. Estilos específicos do conteúdo: arquivo `*.css` ao lado do componente, com prefixo claro (ex.: `confirm-modal__…`) para não colidir com `.modal__*`.
4. Se o fluxo precisar de tecla **Escape** ou **focus trap** avançado, documentar e implementar de forma consistente em todos os modais (hoje o shell não inclui trap automático).

---

## Checklist rápido

- [ ] Usa `Modal` como wrapper?
- [ ] Fecha no overlay e no botão X com `aria-label`?
- [ ] Título associado via `aria-labelledby`?
- [ ] Body scroll bloqueado enquanto aberto?
- [ ] Visual alinhado: glass escuro, borda gradiente ciano/roxo, cantos grandes?
- [ ] Responsivo: padding e largura ajustados em ≤640px?

---

## Referência cruzada

- Mapa de componentes: `.cursor/components/components-map.md` (seção Modais).
- Princípios globais de UI: `.cursor/skills/design-UI.md`.
