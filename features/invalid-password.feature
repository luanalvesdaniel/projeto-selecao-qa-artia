Feature: Registro de usuário

  Scenario: Usuário com senha inferior a 6 caracteres
    Given que estou na tela de registro - senha incorreta
    When eu preencho o campo de nome com "Fulano da Silva" - senha incorreta
    And eu preencho o campo de telefone com "47999887766" - senha incorreta
    And eu preencho o campo de email com um email aleatório válido - senha incorreta
    And eu preencho o campo de senha com "1234" - senha incorreta
    And eu clico no botão de criar conta - senha incorreta
    Then não devo ser redirecionado para a página de boas-vindas - senha incorreta