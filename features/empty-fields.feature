Feature: Registro de usuário

  Scenario: Campos vazios
    Given que estou na tela de registro - campos vazios
    When deixo todos o campos vazios
    Then devo ter a mensagem de campos vazios "Preencha o campo"