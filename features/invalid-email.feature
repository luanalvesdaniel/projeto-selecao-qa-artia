Feature: Registro de usuário

  Scenario: Usuário com e-mail não corporativo
    Given que estou na tela de registro - e-mail não corporativo
    When eu preencho todos os campos corretamente exceto o e-mail "teste@gmail.com"
    And eu clico no botão de criar conta com o e-mail não corporativo
    Then devo ter a mensagem de e-mail "Este não parece ser um email profissional."