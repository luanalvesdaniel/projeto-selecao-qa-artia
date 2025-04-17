Feature: Registro de usuário

  Scenario: Usuário válido
    Given que estou na tela de registro - cadastro válido
    When eu preencho o campo de nome com "Fulano da Silva" - cadastro válido
    And eu preencho o campo de telefone com "47999887766" - cadastro válido
    And eu preencho o campo de email com um email aleatório válido - cadastro válido
    And eu preencho o campo de senha com "senha1234" - cadastro válido
    And eu clico no botão de criar conta - cadastro válido
    Then devo ser redirecionado para a página de boas-vindas - cadastro válido