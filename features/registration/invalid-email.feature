Feature: Registro de usuário

  Scenario: Usuário com e-mail não corporativo
    Given que estou na tela de registro - e-mail incorreto
    When eu preencho o campo de nome com "Fulano da Silva" - e-mail incorreto
    And eu preencho o campo de telefone com "47999887766" - e-mail incorreto
    And eu preencho o campo de email com um email inválido - e-mail incorreto
    And eu preencho o campo de senha com "senha1234" - e-mail incorreto
    And eu clico no botão de criar conta - e-mail incorreto
    Then não devo ser redirecionado para a página de boas-vindas - e-mail incorreto