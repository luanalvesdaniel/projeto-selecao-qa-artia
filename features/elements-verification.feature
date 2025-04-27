Feature: Registro de usuário

  Scenario: Valida elementos necessários em tela
    Given que estou na tela de registro - validar elementos
    When eu verifico o campo Nome
    And eu verifico o campo Telefone
    And eu verifico o campo E-mail
    And eu verifico o campo Senha
    And eu verifico botão Criar Conta
    And eu verifico botão Google
    And eu verifico botão LinkedIn
    And eu verifico Termos de Uso
    And eu verifico Política de Privacidade
    And eu verifico Você pode fazer login!