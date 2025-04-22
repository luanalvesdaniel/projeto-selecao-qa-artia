Feature: Registro de usuário

  Scenario: Usuário com e-mail já existente
    Given que estou na tela de registro - e-mail existente
    When eu preencho o campo de nome com "Fulano da Silva" - e-mail existente
    And eu preencho o campo de telefone com "47999887766" - e-mail existente
    And eu preencho o campo de email com um email inválido - e-mail existente
    And eu preencho o campo de senha com "senha1234" - e-mail existente
    And eu clico no botão de criar conta - e-mail existente
    Then não devo ser redirecionado para a página de boas-vindas - e-mail existente