Feature: Registro de usuário

  Scenario: Usuário com senha inferior a 6 caracteres
    Given que estou na tela de registro - senha incorreta
    When eu preencho todos os campos corretamente exceto a senha "a@b1"
    And eu clico no botão de criar conta a senha incompleta
    Then devo ter a mensagem de senha "O campo precisa ter pelo menos 6 caracteres"