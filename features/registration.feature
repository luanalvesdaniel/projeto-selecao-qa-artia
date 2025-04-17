Feature: Registro de usuário

  Scenario: Valida elementos necessários em tela
    Given elementsVerification: que estou na tela de registro
    When elementsVerification: eu verifico o campo Nome
    And elementsVerification: eu verifico o campo Telefone
    And elementsVerification: eu verifico o campo E-mail
    And elementsVerification: eu verifico o campo Senha
    And elementsVerification: eu verifico botão Criar Conta
    And elementsVerification: eu verifico botão Google
    And elementsVerification: eu verifico botão LinkedIn
    And elementsVerification: eu verifico Termos de Uso
    And elementsVerification: eu verifico Política de Privacidade
    And elementsVerification: eu verifico Você pode fazer login!

  Scenario: Usuário válido
    Given validRegistration: que estou na tela de registro
    When validRegistration: eu preencho o campo de nome com "Fulano da Silva"
    And validRegistration: eu preencho o campo de telefone com "47999887766"
    And validRegistration: eu preencho o campo de email com um email aleatório válido
    And validRegistration: eu preencho o campo de senha com "senha1234"
    And validRegistration: eu clico no botão de criar conta
    Then validRegistration: devo ser redirecionado para a página de boas-vindas

  Scenario: Usuário com telefone inválido
    Given invalidPhone: que estou na tela de registro
    When invalidPhone: eu preencho o campo de nome com "Fulano da Silva"
    And invalidPhone: eu preencho o campo de telefone com "4799"
    And invalidPhone: eu preencho o campo de email com um email aleatório válido
    And invalidPhone: eu preencho o campo de senha com "senha1234"
    And invalidPhone: eu clico no botão de criar conta
    Then invalidPhone: não devo ser redirecionado para a página de boas-vindas

  Scenario: Usuário com e-mail não corporativo
    Given invalidEmail: que estou na tela de registro
    When invalidEmail: eu preencho o campo de nome com "Fulano da Silva"
    And invalidEmail: eu preencho o campo de telefone com "47999887766"
    And invalidEmail: eu preencho o campo de email com um email inválido
    And invalidEmail: eu preencho o campo de senha com "senha1234"
    And invalidEmail: eu clico no botão de criar conta
    Then invalidEmail: não devo ser redirecionado para a página de boas-vindas

  Scenario: Usuário com senha inferior a 6 caracteres
    Given invalidPassword: que estou na tela de registro
    When invalidPassword: eu preencho o campo de nome com "Fulano da Silva"
    And invalidPassword: eu preencho o campo de telefone com "47999887766"
    And invalidPassword: eu preencho o campo de email com um email aleatório válido
    And invalidPassword: eu preencho o campo de senha com "1234"
    And invalidPassword: eu clico no botão de criar conta
    Then invalidPassword: não devo ser redirecionado para a página de boas-vindas
