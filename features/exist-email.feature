Feature: Registro de usuário

  Scenario: Usuário com e-mail já existente
    Given que estou na tela de registro - e-mail existente
    When eu preencho todos os campos corretamente exceto o e-mail existente "teste@teste.com"
    And eu clico no botão de criar conta com o e-mail já existente
    Then devo ter a mensagem de e-mail existente "translation missing: pt, Email já está sendo utilizado por outro usuário."