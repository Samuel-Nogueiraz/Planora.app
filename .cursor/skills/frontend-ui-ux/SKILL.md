---
name: frontend-ui-ux
description: Orienta a implementação em código de pedidos de UI e UX no Planora — componentes, telas, estados e microcopy — com arquitetura frontend limpa e resultado perceptivelmente humano. Usar quando o usuário pedir implementar interface, interação, telas, componentes, polimento, refino de UX no front, código React mais limpo ou entregar UI/UX de forma integrada.
---

# Implementação frontend — UI e UX (Planora)

## Identidade

Skill focada em **traduzir pedidos de interface e experiência em código**: organização previsível, feedback claro ao utilizador e textos naturais — sem substituir análises puramente de produto, UX ou UI visual quando o utilizador pedir só esses papéis.

## Quando usar

* implementar ou alterar telas, componentes, modais, formulários
* pedidos que misturam layout, interação e lógica de apresentação
* polimento: estados vazios, erros, carregamento, confirmações
* refinar front-end mantendo o repositório coerente e legível

## Antes de codificar

1. Ler código adjacente e convenções do `src/` (imports, pastas, nomes, padrões existentes).
2. Se o toque for amplo: `.cursor/Architecture/frontend-architecture.md`, `.cursor/Architecture/state-management.md` e, quando aplicável, `.cursor/components/`.
3. Se o pedido for **só** fluxo/usabilidade sem código, ou **só** especificação visual (paleta, tipografia fina), o utilizador pode invocar as skills `ux` ou `design-ui`; esta skill assume **entrega em React** alinhada a esses princípios.

## Sistema limpo no código

* **Páginas enxutas** — composição; evitar JSX com lógica pesada no mesmo bloco.
* **Hooks** para lógica reutilizável (dados derivados, efeitos, handlers complexos); **serviços** para API conforme o projeto.
* **Componentes pequenos**, responsabilidade clara, props explícitas; não duplicar estado que já possa ser derivado.
* **Um diff focado** no pedido — sem refatorações largas não solicitadas.

## UX mais humana no produto

* **Estados explícitos** quando fizer sentido: a carregar, vazio, erro, sucesso — com mensagens claras e tom encorajador, sem jargão técnico ao utilizador final.
* **Feedback imediato** a ações relevantes; controlos desativados com razão perceptível (ou explicada em microcopy curta).
* **Microcopy**: verbos concretos (“Guardar”, “Adiar”); confirmações para ações destrutivas com consequência visível.
* **Acessibilidade básica**: labels associados, foco gerível, contraste razoável; detalhes adicionais em `ux` quando necessário.

## Consistência visual

* Reutilizar componentes e estilos existentes antes de criar novos.
* Manter alinhamento com o que o Planora já define (ex.: espaçamento, dark/minimalista em `.cursor/Agent.md`).
* Decisões finas de HEX, escala tipográfica e grid: harmonizar com `.cursor/skills/design-ui/SKILL.md`.

## Checklist rápido antes de concluir

* Comportamento cobre os estados principais do fluxo pedido.
* Não há lógica de negócio desnecessariamente acoplada à camada de apresentação.
* Textos e estados de erro são compreensíveis para quem usa a app.
* Alterações respeitam a arquitetura e a documentação em `.cursor/`.
