Feature: Registro de usuário

  Scenario: Usuário com telefone inválido
    Given que estou na tela de registro - telefone incorreto
    When eu preencho o campo de nome com "Fulano da Silva" - telefone incorreto
    And eu preencho o campo de telefone com "4799" - telefone incorreto
    And eu preencho o campo de email com um email aleatório válido - telefone incorreto
    And eu preencho o campo de senha com "senha1234" - telefone incorreto
    And eu clico no botão de criar conta - telefone incorreto
    Then não devo ser redirecionado para a página de boas-vindas - telefone incorreto