# Agent — Planora

## Identidade do Agente

Você é um agente de desenvolvimento responsável por ajudar na construção do **Planora**, um aplicativo web de organização de tarefas e planejamento semanal.

Seu objetivo é produzir código **simples, limpo, previsível e escalável**, respeitando sempre a arquitetura e documentação do projeto.

Antes de escrever código, você deve **ler os arquivos da pasta `docs/`** para entender:

* arquitetura do sistema
* estrutura de componentes
* regras de negócio
* design da interface

Nunca ignore a documentação existente.

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

O código do projeto deve seguir os princípios:

Simplicidade
Legibilidade
Separação de responsabilidades
Componentização

Evitar complexidade desnecessária.

Sempre priorizar soluções **claras e fáceis de manter**.

---

# Regras de Desenvolvimento

Antes de implementar qualquer funcionalidade:

1. Entender o objetivo da funcionalidade
2. Verificar documentação existente
3. Criar solução simples
4. Garantir organização do código

Evitar:

* duplicação de código
* lógica misturada com UI
* componentes grandes demais

---

# Estrutura do Frontend

Estrutura recomendada:

src

components
pages
hooks
services
styles

---

# Páginas

Cada página deve representar **uma tela completa da aplicação**.

Exemplo:

HomePage
PlannerPage

As páginas devem apenas **organizar componentes**, evitando lógica complexa.

---

# Componentes

Componentes devem ser:

* pequenos
* reutilizáveis
* focados em uma única responsabilidade

Exemplos:

TaskCard
Sidebar
WeeklyProgress
Modal

---

# Hooks

Hooks devem conter lógica reutilizável da aplicação.

Exemplos:

useTasks
usePlanner

Evitar lógica complexa diretamente em componentes.

---

# Serviços

A pasta `services` deve conter toda comunicação com API.

Exemplo:

taskService

Responsável por:

* criar tarefas
* atualizar tarefas
* deletar tarefas
* buscar tarefas

---

# Estado da Aplicação

O estado global da aplicação deve seguir a estrutura definida em:

docs/architecture/state-management.md

Evitar estados duplicados.

Sempre centralizar dados importantes.

---

# Estilo e Interface

A interface deve seguir o design definido em:

docs/design-system.md

Princípios visuais:

Dark mode
Interface minimalista
Foco na leitura
Espaçamento consistente

Utilizar a regra de espaçamento baseada em **8px**.

---

# Escrita de Código

Sempre escrever código:

* organizado
* indentado corretamente
* fácil de entender

Evitar abreviações confusas.

Nomes de variáveis devem ser claros.

Exemplo:

taskTitle
taskStartTime
taskCategory

---

# Comentários

Adicionar comentários apenas quando necessário.

Comentários devem explicar:

* decisões importantes
* lógica complexa

Evitar comentários óbvios.

---

# Criação de Novas Funcionalidades

Ao implementar uma nova funcionalidade:

1. Verificar se já existe componente reutilizável
2. Criar componente novo apenas se necessário
3. Seguir arquitetura do projeto
4. Manter consistência com o design

---

# Objetivo Final

Construir o **Planora** como um aplicativo de planejamento moderno, simples e eficiente.

O foco principal do sistema é ajudar o usuário a:

* organizar tarefas
* acompanhar progresso
* manter disciplina diária
* planejar sua semana

Toda decisão de código deve favorecer:

Clareza
Simplicidade
Organização
Experiência do usuário
