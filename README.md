Planora — Planner Digital
O Planora é uma aplicação web fullstack de organização pessoal projetada para oferecer disciplina, clareza e simplicidade na rotina diária
. Diferente de ferramentas de produtividade complexas, o Planora foca em uma interface visual baseada em cards que permite planejar a semana e acompanhar o progresso de forma intuitiva
.
🚀 Proposta do Projeto
O objetivo central é ajudar os usuários a desenvolverem consistência através de uma visualização clara de suas metas e tarefas
. O sistema organiza as atividades por categorias e prioridades, permitindo um acompanhamento em tempo real da produtividade individual
.
✨ Funcionalidades Principais
Visão Semanal (Planner): Organização de tarefas em 7 colunas (domingo a sábado) para uma visão panorâmica da semana
.
Foco Diário (Home): Uma página inicial que resume as tarefas do dia atual e saúda o usuário
.
Gerenciamento de Tarefas: Criação, edição, conclusão e exclusão de tarefas com campos de horário, descrição e frequência
.
Acompanhamento de Progresso: Indicadores visuais de conclusão de tarefas tanto para o dia quanto para a semana
.
Categorização Visual: Divisão de tarefas por áreas como Estudo, Academia, Trabalho e Pessoal, cada uma com sua respectiva cor para facilitar a identificação
.
🛠️ Stack Tecnológica
Frontend: React
.
Backend: ASP.NET Core
.
Banco de Dados: PostgreSQL
.
Arquitetura: Clean Architecture
.
🏗️ Arquitetura do Sistema
O projeto segue rigorosamente os princípios da Clean Architecture para garantir escalabilidade e fácil manutenção
.
Backend
A lógica é dividida em quatro camadas principais
:
API: Gerencia requisições HTTP, rotas e validações de entrada
.
Application: Implementa os casos de uso (ex: criar tarefa, calcular progresso) e contém os DTOs
.
Domain: O núcleo do sistema, contendo entidades e regras de negócio fundamentais sem dependências externas
.
Infrastructure: Lida com a persistência de dados (Repositórios), migrations e recursos externos
.
Frontend
Baseado em componentes reutilizáveis e focado em uma única responsabilidade
.
Pages: Home e Planner
.
Componentes Globais: TaskCard, Sidebar, WeeklyProgress, Modal
.
Estado: Gerenciamento global via Context API para sincronizar dados de tarefas, usuários e filtros
.
🧠 Diretrizes de Desenvolvimento (AGENT.md)
Para manter a integridade do código, todos os colaboradores (incluindo IAs) devem seguir estas regras
:
Responsabilidade Única: Cada componente ou classe deve ter apenas uma função
.
Código Limpo: Priorizar nomes descritivos, funções pequenas e evitar comentários óbvios
.
Segurança e Validação: Validar todas as entradas (ex: horário de início < horário de fim) e evitar exposição de erros internos
.
Consistência: Seguir os padrões de pastas e nomenclatura já estabelecidos no repositório
.
🔮 Visão de Futuro
O Planora foi planejado para evoluir com as seguintes funcionalidades
:
Sistema de Autenticação de Usuários.
Funcionalidade de Arrastar e Soltar (Drag and Drop) no planner.
Notificações e sincronização em tempo real.
Suporte para dispositivos mobile.
Temas personalizáveis.
