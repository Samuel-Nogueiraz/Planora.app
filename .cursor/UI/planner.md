# Página — Planner Semanal

## Objetivo

Apresentar as tarefas organizadas por semana.

Cada dia da semana é representado por uma coluna contendo as tarefas daquele dia.

---

# Estrutura da página

Topo:

← Semana anterior | {weekRange} | Próxima →

Exemplo:

← Semana anterior | 01–07 Março | Próxima →

---

# Colunas de dias

O planner deve possuir 7 colunas:

DOM
SEG
TER
QUA
QUI
SEX
SAB

Cada coluna representa um dia da semana.

---

# Conteúdo das colunas

Cada coluna exibe tarefas onde:

task.date = {columnDate}

Estrutura:

{task.title}

{task.subtitle}

{task.startTime} — {task.endTime}

---

# Progresso diário

Cada coluna deve exibir:

{completedTasks} / {totalTasks} concluídas

Exemplo:

1 / 3 concluídas

---

# Destaque do dia atual

Se:

columnDate == {currentDate}

Exibir:

{dayName} (HOJE)

Estilo:

* borda iluminada
* fundo diferente

---

# Interações

Usuário pode:

* criar tarefa
* editar tarefa
* excluir tarefa
* concluir tarefa
