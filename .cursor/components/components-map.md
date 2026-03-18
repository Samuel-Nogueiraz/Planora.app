# Components Map — Planora

## Objetivo

Este documento define a estrutura de componentes do frontend do Planora.

Ele descreve como as páginas e componentes do sistema se relacionam entre si.

Essa estrutura serve como referência para desenvolvimento e para garantir consistência na construção da interface.

---

# Estrutura geral da aplicação

App

├─ Layout
│  ├─ Sidebar
│  └─ MainContent

MainContent

├─ HomePage
├─ PlannerPage

---

# Página — Home

HomePage

├─ GreetingHeader
│  ├─ UserGreeting
│  └─ CurrentDate

├─ TodayTasksList
│  └─ TaskCard

├─ OpenPlannerButton

---

# Página — Planner

PlannerPage

├─ WeekNavigation
│  ├─ PreviousWeekButton
│  ├─ WeekRangeDisplay
│  └─ NextWeekButton

├─ PlannerGrid

PlannerGrid

├─ DayColumn (DOM)
├─ DayColumn (SEG)
├─ DayColumn (TER)
├─ DayColumn (QUA)
├─ DayColumn (QUI)
├─ DayColumn (SEX)
└─ DayColumn (SAB)

---

# Estrutura da coluna de dia

DayColumn

├─ DayHeader
│  ├─ DayName
│  └─ TodayIndicator

├─ TaskList
│  └─ TaskCard

├─ DailyProgress

---

# Componentes globais

Alguns componentes podem ser usados em várias páginas.

TaskCard

Sidebar

WeeklyProgress

Modal

---

# Estrutura do TaskCard

TaskCard

├─ TaskTitle
├─ TaskSubtitle
├─ TaskTimeRange
└─ TaskStatusIndicator

---

# Estrutura da Sidebar

Sidebar

├─ CreateTaskButton
├─ NavigationSection
│  ├─ HomeLink
│  └─ PlannerLink

├─ CategoriesSection
│  ├─ StudyCategory
│  ├─ GymCategory
│  ├─ WorkCategory
│  └─ PersonalCategory

---

# Modais

CreateTaskModal

├─ TaskForm
│  ├─ TaskDateField
│  ├─ TaskFrequencyField
│  ├─ TaskTitleField
│  ├─ TaskSubtitleField
│  ├─ TaskDescriptionField
│  ├─ TaskCategoryField
│  ├─ TaskTimeFields
│  └─ TaskPriorityField

├─ FormActions
│  ├─ CancelButton
│  └─ CreateTaskButton

---

EditTaskModal

├─ TaskForm

├─ DeleteTaskButton

├─ FormActions
│  ├─ CancelButton
│  └─ SaveChangesButton

---

# Fluxo de dados entre componentes

Tasks são carregadas no estado global.

O fluxo ocorre da seguinte forma:

tasks state

↓

PlannerPage

↓

DayColumn

↓

TaskCard

---

# Boas práticas

Componentes devem ser:

* pequenos
* reutilizáveis
* focados em uma responsabilidade

Evitar lógica pesada dentro de componentes visuais.

A lógica deve ficar em:

hooks

ou

services
