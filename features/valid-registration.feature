Feature: Registro de usuário

  Scenario: Usuário válido
    Given que estou na tela de registro - cadastro válido
    When eu preencho todos os campos corretamente
    And eu clico no botão Criar Conta
    Then devo ser redirecionado para a página de boas-vindas