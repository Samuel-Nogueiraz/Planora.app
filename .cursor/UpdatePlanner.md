# Update Planner — Planora

## Contexto

O Planner atual transmite a sensação de "grande demais" e não valoriza de forma clara o progresso semanal do usuário.

Isso vai contra a proposta central do Planora:

- simplicidade
- clareza da rotina
- consistência
- progresso visível

## Problema principal

Hoje, a hierarquia visual prioriza muito a grade de tarefas e pouco os indicadores de valor.

Principais sintomas:

- a tela não "cabe bem" em resoluções comuns por causa da densidade da estrutura (sidebar + 7 colunas + espaçamentos amplos)
- a área de tarefas domina a interface e empurra informação estratégica para baixo
- o usuário não enxerga rapidamente quantas tarefas concluiu na semana
- a percepção de evolução fica fraca, reduzindo motivação e retorno ao produto

## Causa raiz (visão de produto)

O produto mostra "estrutura de planejamento", mas não evidencia o "resultado do planejamento".

Em um planner, valor percebido nao é apenas listar tarefas; é ver progresso e consistência com rapidez.

## Objetivo da atualização

Reposicionar o Planner para comunicar valor em poucos segundos:

1. mostrar progresso semanal de forma imediata
2. reduzir sensação de interface pesada
3. manter foco em execução diaria sem perder visão da semana

## Solução recomendada (MVP)

### 1) Nova hierarquia visual

Colocar um bloco de progresso semanal no topo da área principal (acima da grade), sempre visível no primeiro olhar.

Esse bloco deve comunicar:

- total concluído na semana
- total planejado
- percentual
- mensagem curta de incentivo

### 2) Densidade mais enxuta no grid

Diminuir peso visual das colunas e cards para caber melhor na tela sem sensação de "estouro".

Diretrizes:

- reduzir espaços internos excessivos
- priorizar informações essenciais no card (titulo, horario, status)
- deixar detalhes secundarios para interação (ex.: clique/hover)

### 3) Melhor uso de altura e rolagem

A rolagem deve privilegiar o conteúdo de tarefas, nao quebrar a leitura geral da página.

Diretrizes:

- evitar múltiplas rolagens concorrentes sem necessidade
- manter cabeçalho e progresso em posição estável
- permitir que o usuário entenda "onde está" na semana

### 4) Reforço de consistência

Adicionar micro-feedback de progresso para fortalecer o hábito:

- progresso do dia em cada coluna (formato compacto)
- mensagem de consistência semanal quando houver avanço

## Priorização

### Fazer agora (alto impacto, baixa complexidade)

- ajustar hierarquia (progresso semanal em destaque)
- reduzir densidade visual do planner
- garantir visualização clara do "concluído x total"

### Fazer depois (impacto médio)

- resumo semanal com insights simples (dia mais produtivo, taxa da semana)
- modo de foco para telas menores

### Não priorizar agora

- analytics avançado
- personalizações visuais extensas
- gamificação complexa

## Critérios de sucesso

A atualização será considerada bem-sucedida quando:

- o usuário visualizar progresso semanal sem precisar rolar a página
- o planner parecer mais leve e legível em resolução padrão de notebook
- ficar claro quantas tarefas foram concluídas na semana
- a navegação semanal permanecer simples e previsível

## Princípios de implementação

Seguir os princípios do Planora:

- simples > completo
- valor real > quantidade de features
- MVP > perfeição

Cada ajuste visual deve responder à pergunta:

> Isso facilita o usuário a planejar melhor e manter consistência?

Se não facilitar, não deve entrar nesta etapa.

## Escopo desta atualização

Esta atualização é de posicionamento de valor no Planner, não de expansão funcional ampla.

Foco:

- clareza
- hierarquia
- percepção de progresso

Sem aumentar complexidade desnecessária do produto.
