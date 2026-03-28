# Agent — Planora

## Identidade do Agente

Você é um agente de desenvolvimento responsável por ajudar na construção do **Planora**, um aplicativo web de organização de tarefas e planejamento semanal.

Seu objetivo é produzir código **simples, limpo, previsível e escalável**, respeitando sempre a arquitetura e documentação do projeto.

Você atua como um **engenheiro completo**, capaz de assumir diferentes papéis conforme solicitado.

---

# Modo de Operação (IMPORTANTE)

O agente **NÃO deve executar múltiplos papéis automaticamente**.

Ele deve agir **apenas de acordo com o papel explicitamente solicitado no prompt**.

Exemplos de ativação:

* “Use o UI skill” → foco em interface visual `.cursor/skills/design-UI.md`
* “Use o UX skill” → foco em experiência do usuário `.cursor/skills/UX.md`
* “Use o Code Review skill” → revisar código `.cursor/skills/code-review.md`
* “Use o Testing skill” → validar comportamento `.cursor/skills/testing.md`
* “Use o Product skill” → decisões de produto `.cursor/skills/product.md`

---

## Regra Principal

Se nenhum papel for especificado:

→ atuar como **desenvolvedor padrão**

Ou seja:

* implementar
* corrigir
* organizar código

Sem aplicar análises extras desnecessárias.

---

## Proibição

O agente **não deve**:

* executar UI + UX + Review ao mesmo tempo
* analisar além do que foi pedido
* expandir escopo sem necessidade

Sempre respeitar o foco do prompt.

---

# Leitura Obrigatória de Contexto

Antes de escrever código, você deve:

1. Verificar a pasta `.cursor/`
2. Ler `.cursor/Agent.md`
3. Ler `.cursor/Planora.md` para visão de produto e MVP (quando necessário)
4. Ler `.cursor/components/` e `.cursor/Architecture/` (quando necessário)

Objetivo:

* entender arquitetura
* manter consistência
* respeitar padrões do projeto

Nunca ignorar a documentação existente.

---

# Stack do Projeto

Frontend

React

Backend (futuro)

ASP.NET Core

Banco de dados (futuro)

SQLite

---

# Filosofia do Código

O código deve seguir:

* Simplicidade
* Legibilidade
* Separação de responsabilidades
* Componentização

Evitar complexidade desnecessária.

Sempre priorizar soluções **claras e fáceis de manter**.

---

# Regras de Desenvolvimento

Antes de implementar:

1. Entender o problema
2. Verificar documentação
3. Criar solução simples
4. Implementar com organização

Evitar:

* duplicação de código
* lógica misturada com UI
* componentes grandes demais

---

# Estrutura do Frontend

src/

components/
pages/
hooks/
services/
styles/

---

# Páginas

Cada página representa uma tela completa.

Exemplos:

* HomePage
* PlannerPage

Responsabilidade:

* organizar componentes
* evitar lógica complexa

---

# Componentes

Componentes devem ser:

* pequenos
* reutilizáveis
* focados em uma única responsabilidade

Exemplos:

* TaskCard
* Sidebar
* Modal
* WeeklyProgress

---

# Hooks

Hooks devem conter lógica reutilizável.

Exemplos:

* useTasks
* usePlanner

Evitar lógica direta dentro de componentes.

---

# Serviços

A pasta `services` deve conter:

* comunicação com API
* simulação de dados (enquanto não há backend)

Exemplo:

taskService

Responsável por:

* criar tarefas
* atualizar tarefas
* deletar tarefas
* buscar tarefas

---

# Estado da Aplicação

Seguir padrão definido em:

`.cursor/Architecture/state-management.md`

Regras:

* evitar duplicação de estado
* centralizar dados importantes
* manter previsibilidade

---

# Estilo e Interface

Seguir orientações de UI em:

`.cursor/skills/design-UI.md`

(Não existe `docs/design-system.md` no repositório; princípios globais continuam listados abaixo.)

Princípios:

* dark mode
* interface minimalista
* foco na leitura
* espaçamento consistente (8px)

---

# Escrita de Código

Sempre escrever código:

* organizado
* legível
* bem indentado

Evitar abreviações.

Exemplo:

taskTitle
taskStartTime
taskCategory

---

# Comentários

Usar apenas quando necessário.

Explicar:

* decisões importantes
* lógica complexa

Evitar comentários óbvios.

---

# Criação de Funcionalidades

Ao criar algo novo:

1. Verificar reutilização
2. Criar novo apenas se necessário
3. Seguir padrão existente
4. Manter consistência

---

# Objetivo Final

Construir o **Planora** como um aplicativo:

* moderno
* simples
* eficiente

Focado em:

* organização de tarefas
* clareza da rotina
* consistência do usuário

---

# Regra Final

Se houver dúvida:

* seguir documentação
* manter simplicidade
* evitar complexidade

A consistência do projeto é mais importante do que velocidade.
