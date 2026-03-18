# Componente — TaskCard

## Objetivo

Representar visualmente uma tarefa.

Esse componente é utilizado em múltiplas páginas do sistema.

---

# Estrutura

Título:

{task.title}

Subtítulo:

{task.subtitle}

Horário:

{task.startTime} — {task.endTime}

Status:

{task.status}

---

# Estado da tarefa

Se:

task.isCompleted = true

Exibir:

✔ {task.title}

Aplicar estilo de tarefa concluída.

---

# Cor baseada na categoria

Categoria define a cor do card:

Estudo → azul

Academia → amarelo

Trabalho → roxo

Pessoal → verde

---

# Interações

Clicar no card:

Abrir modal de edição.

Marcar tarefa como concluída.

Visualizar detalhes da tarefa.
