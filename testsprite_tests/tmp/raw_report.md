
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** Planora.App
- **Date:** 2026-03-21
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Criar nova tarefa (campos obrigatórios e opcionais) e ver cartão aparecer no dia correto
- **Test Code:** [TC001_Criar_nova_tarefa_campos_obrigatrios_e_opcionais_e_ver_carto_aparecer_no_dia_correto.py](./TC001_Criar_nova_tarefa_campos_obrigatrios_e_opcionais_e_ver_carto_aparecer_no_dia_correto.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- No UI control found to jump to an arbitrary date (no date picker or "go to date" input) on the Agenda view.
- Only week-by-week navigation (previous/next week) and a 'Hoje' button are available, which makes reaching the date 2030-01-15 impractical through the UI.
- Unable to verify that 'Tarefa de teste - comprar pão' appears on 2030-01-15 and unable to mark it as completed because the target date cannot be reached with the available navigation controls.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/260297cd-bc65-4511-be0a-9d80770822e4
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003 Marcar tarefa como concluída e verificar atualização visual no cartão
- **Test Code:** [TC003_Marcar_tarefa_como_concluda_e_verificar_atualizao_visual_no_carto.py](./TC003_Marcar_tarefa_como_concluda_e_verificar_atualizao_visual_no_carto.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/a8f097e5-31d5-45f1-a460-6f552a5d544f
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005 Editar tarefa existente e verificar atualização do título no cartão
- **Test Code:** [TC005_Editar_tarefa_existente_e_verificar_atualizao_do_ttulo_no_carto.py](./TC005_Editar_tarefa_existente_e_verificar_atualizao_do_ttulo_no_carto.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Task card with title 'Título original' not found in the full agenda view after opening 'Abrir agenda completa'.
- No visible UI control to jump to a specific date (e.g., year 2030) or to search tasks by title was found, preventing access to the week containing the created task.
- 'Editar' action could not be performed because the created task is not present in any accessible week, so the edit validation could not be completed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/9a65f295-4dd4-47b0-bb36-73f42b276453
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006 Excluir tarefa existente (confirmar exclusão) e verificar remoção do cartão
- **Test Code:** [TC006_Excluir_tarefa_existente_confirmar_excluso_e_verificar_remoo_do_carto.py](./TC006_Excluir_tarefa_existente_confirmar_excluso_e_verificar_remoo_do_carto.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Task 'Tarefa a excluir' not found in the page DOM after creation attempts.
- Create operation failed to add the task to the visible list; no card with matching title exists.
- Clicking the 'Criar tarefa' button produced non-interactable/stale element errors during some attempts.
- Delete-confirmation flow could not be tested because the target task card was not present.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/f44a1c2d-01f3-4bbd-9225-995724de0b39
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008 Validação: tentar salvar tarefa sem título mantém modal aberto e exibe indicação de erro
- **Test Code:** [TC008_Validao_tentar_salvar_tarefa_sem_ttulo_mantm_modal_aberto_e_exibe_indicao_de_erro.py](./TC008_Validao_tentar_salvar_tarefa_sem_ttulo_mantm_modal_aberto_e_exibe_indicao_de_erro.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/8e6d1ebe-d3b4-4fcc-81b4-4c5675c1abde
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009 Abrir Planner e validar estrutura básica (cabeçalho, progresso semanal e grade)
- **Test Code:** [TC009_Abrir_Planner_e_validar_estrutura_bsica_cabealho_progresso_semanal_e_grade.py](./TC009_Abrir_Planner_e_validar_estrutura_bsica_cabealho_progresso_semanal_e_grade.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/8da7d175-7fe2-49f5-8bc0-d8a915a1fe70
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010 Semana atual: destacar coluna de hoje e colunas vizinhas (quando aplicável)
- **Test Code:** [TC010_Semana_atual_destacar_coluna_de_hoje_e_colunas_vizinhas_quando_aplicvel.py](./TC010_Semana_atual_destacar_coluna_de_hoje_e_colunas_vizinhas_quando_aplicvel.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/ffdc2bb8-a5e4-4d5b-bd5f-39471d539634
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011 Navegar para próxima semana e validar atualização do rótulo da semana e conteúdo
- **Test Code:** [TC011_Navegar_para_prxima_semana_e_validar_atualizao_do_rtulo_da_semana_e_contedo.py](./TC011_Navegar_para_prxima_semana_e_validar_atualizao_do_rtulo_da_semana_e_contedo.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/85754ed9-6ca7-48a1-829a-f07edd6809ba
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012 Semana que não contém hoje: não deve haver destaques de foco primário/secundário
- **Test Code:** [TC012_Semana_que_no_contm_hoje_no_deve_haver_destaques_de_foco_primriosecundrio.py](./TC012_Semana_que_no_contm_hoje_no_deve_haver_destaques_de_foco_primriosecundrio.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/d2303f2e-08ed-4b4e-91ef-8b2699bf88f3
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014 Editar uma tarefa a partir de uma coluna do dia e salvar alterações
- **Test Code:** [TC014_Editar_uma_tarefa_a_partir_de_uma_coluna_do_dia_e_salvar_alteraes.py](./TC014_Editar_uma_tarefa_a_partir_de_uma_coluna_do_dia_e_salvar_alteraes.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Edit task modal not found after clicking task cards: no modal title, input fields (e.g., Title), or 'Salvar' button detected on the page.
- Repeated click attempts on multiple task elements (10 attempts) did not open any edit dialog or editable inputs.
- The page shows task cards and other UI elements but lacks any visible modal/dialog controls required to perform the edit-and-save workflow.
- Because the edit modal cannot be opened, the update-and-save behavior cannot be verified.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/da2931d4-a14c-4beb-88dc-c461fe783d93
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC016 Planner: semana atual destaca o dia de hoje e faz scroll para a coluna primária
- **Test Code:** [TC016_Planner_semana_atual_destaca_o_dia_de_hoje_e_faz_scroll_para_a_coluna_primria.py](./TC016_Planner_semana_atual_destaca_o_dia_de_hoje_e_faz_scroll_para_a_coluna_primria.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/c4a2d6cb-4e45-494b-9628-1b0ccc9736cf
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC017 Planner: navegar para uma semana que não contém hoje não exibe foco e não faz scroll automático
- **Test Code:** [TC017_Planner_navegar_para_uma_semana_que_no_contm_hoje_no_exibe_foco_e_no_faz_scroll_automtico.py](./TC017_Planner_navegar_para_uma_semana_que_no_contm_hoje_no_exibe_foco_e_no_faz_scroll_automtico.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/fe1a0a36-ee8c-466b-a30c-bedc6440df71
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC018 Planner: voltar para a semana atual reavalia foco e recentraliza a coluna primária
- **Test Code:** [TC018_Planner_voltar_para_a_semana_atual_reavalia_foco_e_recentraliza_a_coluna_primria.py](./TC018_Planner_voltar_para_a_semana_atual_reavalia_foco_e_recentraliza_a_coluna_primria.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/d841f422-04b3-404c-864c-cd3bcb730532
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002 Cancelar criação de tarefa e garantir que nada é adicionado
- **Test Code:** [TC002_Cancelar_criao_de_tarefa_e_garantir_que_nada__adicionado.py](./TC002_Cancelar_criao_de_tarefa_e_garantir_que_nada__adicionado.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/0f4c40ef-ee8e-46f7-99e9-ef61b94ee13f
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004 Desmarcar tarefa concluída e verificar retorno ao estado não concluído
- **Test Code:** [TC004_Desmarcar_tarefa_concluda_e_verificar_retorno_ao_estado_no_concludo.py](./TC004_Desmarcar_tarefa_concluda_e_verificar_retorno_ao_estado_no_concludo.py)
- **Test Error:** TEST FAILURE

ASSERTIONS:
- Tarefa 'Tarefa alternar conclusão' não está visível na Agenda para a semana atual e não foi encontrada pela busca na página.
- A interface não fornece um controle de navegação direta para uma data específica (apenas botões 'semana anterior' / 'próxima'), tornando impraticável acessar datas muito distantes (ex.: 2030-01-15).
- Incapacidade de localizar a tarefa impede a verificação do alternar entre concluído e não concluído e a verificação do indicador visual de tarefa concluída.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/3e2466a8-e2f0-43b9-b4bb-f9a69e1faf1e/b694bf6a-c500-4f1a-a0f5-c788ed297bdd
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **66.67** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---