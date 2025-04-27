Feature: Registro de usuário

  Scenario: Usuário com telefone inválido
    Given que estou na tela de registro - telefone incorreto
    When eu preencho todos os campos corretamente exceto o telefone "4799"    
    And eu clico no botão de criar conta com telefone incompleto
    Then devo ter a mensagem de telefone "Telefone inválido"