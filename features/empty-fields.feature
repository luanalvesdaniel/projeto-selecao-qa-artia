Feature: Registro de usuário

  Scenario: Campos vazios
    Given que estou na tela de registro - campos vazios
    When eu preencho o campo de nome com "" - campos vazios
    And eu preencho o campo de telefone com "" - campos vazios
    And eu preencho o campo de email vazio - campos vazios
    And eu preencho o campo de senha com "" - campos vazios
    And eu clico no botão de criar conta - campos vazios
    Then não devo ser redirecionado para a página de boas-vindas - campos vazios