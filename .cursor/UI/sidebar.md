# Componente — Sidebar

## Objetivo

A Sidebar é responsável pela navegação principal do sistema.

Ela permite acesso rápido às principais áreas do Planora e também possibilita a criação de novas tarefas.

A Sidebar deve estar visível em todas as páginas principais do sistema.

---

# Estrutura da Interface

Itens exibidos na Sidebar:

* Nova tarefa

Hoje

Agenda

Categorias

---

# Ações dos itens

## Nova tarefa

Ao clicar:

Abrir modal de criação de tarefa.

Ação:

openCreateTaskModal()

---

## Hoje

Redireciona o usuário para a página Home.

Rota:

/home

---

## Agenda

Redireciona o usuário para o Planner semanal.

Rota:

/planner

---

## Categorias

Permite filtrar tarefas por categoria.

Categorias padrão do sistema:

Estudo

Academia

Trabalho

Pessoal

---

# Comportamento de filtro

Ao selecionar uma categoria:

Aplicar filtro no estado global:

filters.category = {selectedCategory}

A interface deve atualizar automaticamente mostrando apenas tarefas da categoria selecionada.

---

# Estrutura de dados utilizada

A Sidebar consome dados de:

user.name

filters.category

---

# Estado relacionado

O componente interage com os seguintes estados globais:

filters

modals.createTask

---

# Responsabilidades do componente

A Sidebar deve:

permitir navegação entre páginas

abrir modal de criação de tarefas

aplicar filtros de categoria

exibir categorias disponíveis
