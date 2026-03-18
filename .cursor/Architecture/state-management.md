# State Management — Planora

## Objetivo

Definir como o estado da aplicação será organizado no frontend.

O estado representa todos os dados que podem mudar durante o uso do sistema.

---

# Estrutura principal do estado

Estrutura global sugerida:

{
user: {},
tasks: [],
planner: {},
modals: {},
filters: {}
}

---

# User State

Responsável por armazenar informações do usuário.

{
id: string,
name: string,
email: string
}

---

# Task State

Lista de todas as tarefas carregadas no sistema.

Estrutura:

{
id: string,
title: string,
subtitle: string,
description: string,
category: string,
priority: string,
date: string,
startTime: string,
endTime: string,
isCompleted: boolean,
frequency: string
}

---

# Planner State

Define a semana e dia atualmente visualizados.

{
selectedWeek: date,
selectedDay: date
}

---

# Modal State

Controla modais abertos.

{
createTask: boolean,
editTask: taskId | null
}

---

# Filter State

Controla filtros ativos.

{
category: string | null
}

---

# Atualização de estado

O estado deve atualizar quando:

* tarefa criada
* tarefa editada
* tarefa excluída
* tarefa concluída
