# 📄 Home Redesign — Planora

## 🎯 Objetivo

Transformar a Home de um layout simples (funcional) para um layout com **identidade, profundidade visual e sensação de progresso**, alinhado com a proposta do Planora:

> clareza + organização + consistência

---

# 🧠 Situação Atual (Problemas)

## 1. Layout

* Estrutura simples e centralizada
* Muito espaço vazio
* Falta divisão clara de áreas

👉 Resultado:
Interface sem presença, parece “incompleta”

---

## 2. Sidebar inexistente ou fraca

* Não há navegação fixa
* Falta sensação de sistema completo

👉 Resultado:
Experiência limitada e pouco profissional

---

## 3. Fundo sem identidade

* Cor sólida simples
* Sem profundidade visual

👉 Resultado:
Interface “morta”

---

## 4. Falta de progresso visível

* Usuário não sente evolução no dia

👉 Resultado:
Quebra do principal valor do produto (consistência)

---

## 5. Cards pouco destacados

* Baixo contraste
* Hierarquia fraca

👉 Resultado:
Dificuldade de leitura rápida

---

# 🚀 Novo Design (Proposta)

## 🧱 Estrutura Geral

```txt
| SIDEBAR (30%) | MAIN (70%) |
```

---

# 🎯 1. Sidebar (Navegação Principal)

## Objetivo

Criar uma área fixa que:

* organiza navegação
* dá identidade ao sistema
* ocupa espaço visual

---

## Layout

Topo:

* Logo / Nome (Planora)
* Botão "Nova tarefa"
* Navegação:

  * Hoje
  * Agenda
  * Categorias

Rodapé:

* Foto do usuário (esquerda)
* Nome (ao lado)
* "Editar perfil" abaixo do nome

---

## Estilo

* Largura: ~30%
* Fundo:

```css
linear-gradient(180deg, #2a2a2a, #2a2a2a, #1e3a8a);
```

👉 Cinza neutro + azul no final (profundidade)

---

# 🎯 2. Fundo da Home (Área Principal)

## Objetivo

Manter neutralidade sem perder vida visual

---

## Cor base

```css
#111827
```

(cinza azulado escuro)

---

## Iluminação (efeito moderno)

```css
radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent),
radial-gradient(circle at bottom left, rgba(139,92,246,0.15), transparent)
```

👉 Azul + roxo aplicados de forma sutil

---

# 🎯 3. Header + Progresso

## Objetivo

Mostrar ao usuário:

* onde ele está (dia atual)
* quanto já avançou

---

## Estrutura

* Saudação
* Data atual
* Barra de progresso
* Texto de progresso (ex: 2 de 5 tarefas)

---

## Estilo da barra

```css
background: linear-gradient(90deg, #3b82f6, #8b5cf6);
```

👉 Identidade visual do produto

---

# 🎯 4. Lista de Tarefas

## Objetivo

Preencher a tela e dar ritmo visual

---

## Estrutura

* Lista vertical
* Espaçamento consistente
* Cards maiores

---

# 🎯 5. TaskCard (Elemento Principal)

## Objetivo

Ser o foco visual da aplicação

---

## Estrutura

```txt
Título                  Horário
Subtítulo

Status
```

---

## Estilo

```css
background: rgba(255,255,255,0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.1);
```

👉 efeito glass (moderno)

---

## Status por cor

* Azul → Pendente
* Verde → Concluído

---

# 🎯 6. User Box (Sidebar - Rodapé)

## Estrutura

```txt
[FOTO]  Samuel
        Editar perfil
```

---

## Regras

* Foto alinhada à esquerda
* Nome ao lado
* "Editar perfil" abaixo do nome

---

# 🎨 Identidade Visual Final

## Base

* Fundo: cinza azulado escuro
* Sidebar: cinza + azul

## Destaques

* Azul (#3b82f6)
* Roxo (#8b5cf6)

## Estilo

* escuro
* moderno
* limpo
* com profundidade

---

# 🧠 Resultado Esperado

ANTES:

* interface simples
* pouco impacto visual
* sensação de projeto

DEPOIS:

* interface moderna
* identidade forte
* sensação de produto real
* foco em progresso e consistência

---

# 📌 Diretriz Final

A Home deve fazer o usuário sentir:

> “Meu dia está organizado e eu estou avançando”

Se não transmitir isso, o design ainda não está correto.
