Feature: Registro de usuário

  Scenario: Valida elementos necessários em tela
    Given que estou na tela de registro - validar elementos
    When eu verifico o campo Nome - validar elementos
    And eu verifico o campo Telefone - validar elementos
    And eu verifico o campo E-mail - validar elementos
    And eu verifico o campo Senha - validar elementos
    And eu verifico botão Criar Conta - validar elementos
    And eu verifico botão Google - validar elementos
    And eu verifico botão LinkedIn - validar elementos
    And eu verifico Termos de Uso - validar elementos
    And eu verifico Política de Privacidade - validar elementos
    And eu verifico Você pode fazer login! - validar elementos