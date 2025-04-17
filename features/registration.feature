@validRegistration
Feature: Registro de usuário válido

  Scenario: Preencher todos os campos obrigatórios e criar conta
    Given que estou na tela de registro
    When eu preencho o campo de nome com "Luan"
    And eu preencho o campo de telefone com "47999821576"
    And eu preencho o campo de email com um email aleatório válido
    And eu preencho o campo de senha com "senha1234"
    And eu clico no botão de criar conta
    Then devo ser redirecionado para a página de boas-vindas
