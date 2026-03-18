# Componente — Weekly Progress

## Objetivo

O componente WeeklyProgress exibe o progresso geral das tarefas da semana.

Ele permite ao usuário visualizar rapidamente quantas tarefas foram concluídas em relação ao total da semana.

Esse componente é exibido na parte inferior da página Planner.

---

# Estrutura da Interface

Título:

Progresso da semana

Contador de tarefas:

{completedWeekTasks} / {totalWeekTasks} tarefas concluídas

Exemplo:

10 / 30 tarefas concluídas

---

# Barra de progresso

O progresso deve ser representado visualmente com uma barra.

Exemplo:

████████░░░░░░░░

A largura preenchida da barra deve representar a porcentagem de tarefas concluídas.

---

# Cálculo do progresso

O progresso deve ser calculado da seguinte forma:

progress = completedWeekTasks / totalWeekTasks

Exemplo:

completedWeekTasks = 10

totalWeekTasks = 30

progress = 0.33

---

# Estrutura de dados utilizada

O componente utiliza dados provenientes do estado global de tarefas:

tasks[]

---

# Lógica de cálculo

Total de tarefas da semana:

tasks onde:

task.date pertence à semana selecionada

Tarefas concluídas:

tasks onde:

task.isCompleted = true

e

task.date pertence à semana selecionada

---

# Atualização do progresso

O progresso deve atualizar automaticamente quando ocorrer qualquer um dos eventos abaixo:

tarefa criada

tarefa concluída

tarefa editada

tarefa excluída

---

# Responsabilidades do componente

O componente deve:

calcular progresso da semana

exibir número de tarefas concluídas

exibir barra visual de progresso

atualizar automaticamente quando tarefas mudarem
