Feature: Registro de usuário

  Scenario: Valida elementos em Português
    Given que estou na tela de registro validando em Português
    When eu escolho o idioma Português
    Then confirmo as informações em Português

  Scenario: Valida elementos em Inglês
    Given que estou na tela de registro validando em Inglês
    When eu escolho o idioma Inglês
    Then confirmo as informações em Inglês

  Scenario: Valida elementos em Espanhol
    Given que estou na tela de registro validando em Espanhol
    When eu escolho o idioma Espanhol
    Then confirmo as informações em Espanhol