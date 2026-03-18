# Modal — Criar Nova Tarefa

## Objetivo

Permitir que o usuário crie uma nova tarefa.

---

# Estrutura do formulário

Campo:

Dia

Valor inicial:

{selectedDate}

---

# Frequência da tarefa

Campo:

frequency

Opções:

Apenas este dia
Todos os dias da semana
Todos os dias do mês
Apenas dias úteis

Valor enviado para API:

{task.frequency}

---

# Informações da tarefa

Título da tarefa (obrigatório)

{task.title}

Subtítulo

{task.subtitle}

Descrição

{task.description}

---

# Categoria

{task.category}

Opções:

Estudo
Academia
Trabalho
Pessoal

---

# Horário

Início:

{task.startTime}

Fim:

{task.endTime}

Regra:

startTime < endTime

---

# Prioridade

{task.priority}

Opções:

Baixa
Média
Alta

---

# Ações

Botões:

Descartar
Criar tarefa

---

# Comportamento

Ao clicar em criar tarefa:

Enviar requisição:

POST /api/tasks

Body:

{
title: {task.title},
date: {task.date},
startTime: {task.startTime},
endTime: {task.endTime},
category: {task.category},
priority: {task.priority}
}

Após sucesso:

* fechar modal
* atualizar lista de tarefas
