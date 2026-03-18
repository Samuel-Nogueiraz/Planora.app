# Arquitetura do Sistema — Planora

## Visão Geral

O Planora é uma aplicação web fullstack projetada para organização pessoal e gerenciamento de tarefas.

A arquitetura foi planejada utilizando princípios de **Clean Architecture**, garantindo separação de responsabilidades, escalabilidade e facilidade de manutenção.

O sistema é dividido em duas partes principais:

* Frontend (interface do usuário)
* Backend (API e regras de negócio)

---

# Arquitetura Geral

Fluxo da aplicação:

Frontend → API → Application → Domain → Infrastructure → Database

Cada camada possui uma responsabilidade específica.

---

# Camadas do Backend

## API Layer

Responsável pela comunicação HTTP com o frontend.

Principais responsabilidades:

* receber requisições
* validar dados de entrada
* retornar respostas HTTP
* gerenciar rotas da aplicação

Componentes:

* Controllers
* Middleware
* Configuração da aplicação

---

## Application Layer

Responsável pela lógica da aplicação.

Aqui ficam os **casos de uso do sistema**, incluindo:

* criação de tarefas
* atualização de tarefas
* exclusão de tarefas
* conclusão de tarefas
* cálculo de progresso

Componentes:

* Services
* DTOs
* Interfaces

---

## Domain Layer

Representa o **núcleo do sistema**.

Contém:

* entidades principais
* enums
* regras de negócio fundamentais

Essa camada não depende de nenhuma outra camada externa.

---

## Infrastructure Layer

Responsável pela comunicação com recursos externos.

Inclui:

* banco de dados
* repositórios
* migrations
* integração com serviços externos

---

# Frontend Architecture

O frontend é desenvolvido com React e segue uma estrutura baseada em componentes.

Organização principal:

components → componentes reutilizáveis
pages → páginas da aplicação
services → comunicação com API
utils → funções auxiliares
styles → estilos globais

---

# Fluxo de Funcionamento

Exemplo: criação de tarefa

1. Usuário cria tarefa na interface
2. React envia requisição para API
3. Controller recebe requisição
4. Service executa lógica da aplicação
5. Repository salva dados no banco
6. API retorna resposta
7. Interface atualiza estado da aplicação

---

# Escalabilidade

A arquitetura foi projetada para permitir futuras expansões, como:

* autenticação de usuários
* notificações
* sincronização em tempo real
* drag and drop de tarefas
* suporte mobile

A separação em camadas permite adicionar novas funcionalidades sem comprometer o sistema existente.
