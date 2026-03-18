# Arquitetura Frontend — Planora

## Stack

Frontend será construído utilizando:

React

---

# Estrutura de pastas recomendada

src/

components/

pages/

services/

hooks/

context/

styles/

---

# Pages

Representam telas completas do sistema.

Exemplos:

HomePage

PlannerPage

---

# Components

Componentes reutilizáveis.

Exemplos:

TaskCard

Sidebar

ProgressBar

Modal

---

# Services

Responsáveis por comunicação com API.

Exemplo:

taskService.js

Funções:

createTask()

updateTask()

deleteTask()

getTasks()

---

# Hooks

Hooks customizados para lógica reutilizável.

Exemplos:

useTasks()

usePlanner()

---

# Context

Gerenciamento global de estado.

Exemplo:

TaskContext

UserContext
