---
name: authoring-cursor-skills
description: Orienta criação de Agent Skills no formato Cursor (subpasta, SKILL.md, frontmatter YAML, conteúdo enxuto). Usar quando o usuário pedir para criar skill, SKILL.md, formato Cursor, convenções de skills ou progressive disclosure no repositório Planora.
---

# Authoring — Skills no formato Cursor

## Objetivo

Criar ou manter **Agent Skills** no padrão Cursor: uma pasta por skill com `SKILL.md` e metadados YAML. O agente usa a `description` do frontmatter para decidir **quando** carregar a skill.

## Estrutura de pastas

```text
.cursor/skills/nome-da-skill/
├── SKILL.md          # obrigatório
├── reference.md      # opcional (detalhes longos)
├── examples.md       # opcional
└── scripts/          # opcional
```

- **Projeto:** `.cursor/skills/` neste repositório (compartilhado com o time).
- **Pessoal (máquina):** `~/.cursor/skills/` para skills globais.
- **Não usar** `~/.cursor/skills-cursor/` (reservado ao Cursor).

## Template do SKILL.md

1. Frontmatter com `name` e `description` (obrigatórios).
2. Corpo com instruções acionáveis; evitar texto genérico que o modelo já “sabe”.

```markdown
---
name: nome-curto-kebab
description: Terceira pessoa: o que a skill faz e quando aplicar (palavras-gatilho do domínio).
---

# Título humano

## Quando usar
Lista curta de gatilhos.

## Instruções
Passos ou regras claras.

## Recursos adicionais
- Detalhes longos: [reference.md](reference.md)
```

## Metadados

| Campo | Regra |
|-------|--------|
| `name` | Até 64 caracteres; apenas minúsculas, números e hífens. |
| `description` | Até 1024 caracteres; **terceira pessoa**; incluir **O QUÊ** e **QUANDO** e termos que o usuário pode dizer no prompt. |

**Boas descrições (exemplos de tom):**

- "Gera mensagens de commit a partir do diff. Usar quando o usuário pedir commit, mensagem de commit ou revisar mudanças staged."
- "Revisa PRs com foco em segurança e legibilidade. Usar em code review, pull request ou revisão de diff."

## Princípios de conteúdo

1. **Conciso:** preferir poucas linhas acionáveis; não explicar o óbvio.
2. **SKILL.md < ~500 linhas:** mover detalhes para `reference.md` ou `examples.md`.
3. **Progressive disclosure:** link direto de `SKILL.md` para arquivos irmãos (um nível de profundidade).
4. **Caminhos em documentação:** usar `/` (ex.: `scripts/validate.py`), não barras invertidas de Windows.
5. **Consistência:** escolher um termo (ex.: "endpoint") e manter em todo o texto.

## Layout neste repositório

As skills do Planora ficam em `.cursor/skills/<nome-kebab>/SKILL.md` com frontmatter (`code-review`, `testing`, `product`, `design-ui`, `ux`, `frontend-ui-ux`, `authoring-cursor-skills`). Novas skills devem seguir o mesmo padrão.

## Checklist antes de finalizar

- [ ] `name` válido (kebab-case).
- [ ] `description` em terceira pessoa, com gatilhos explícitos.
- [ ] Instruções curtas e testáveis.
- [ ] Sem informação fortemente datada sem marcador (evitar “até mês X”).
- [ ] Links para `reference.md` / `examples.md` só se esses arquivos existirem.
