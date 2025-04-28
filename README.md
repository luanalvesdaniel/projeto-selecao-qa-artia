# Projeto Seleção QA - Artia

Este projeto foi desenvolvido como parte do desafio prático para a vaga de Analista de QA e Automação na empresa Artia.

O projeto conta com execução de testes automatizados na tela de **Registro** utilizando Gherkin com geração de reporte html, vídeo em caso de falha e execução via GitHub Actions (CI/CD)

## ✅ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- [Cucumber (Gherkin)](https://cucumber.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

---

## 💡 Sugestão de Plugins para VS Code

- Cucumber
  - Ajudará a visualizar melhor as features e indicação de falta de steps caso não tenha

---

## 📁 Estrutura de Pastas

```
.
├── .github/
│   ├── workflows/
│   │   ├── node.js.yml          # Contém job e steps para execução no GitHub Actions
├── features/                    # Gherkin (Cucumber)
│   │   ├── elements-verification.feature
│   │   ├── invalid-email.feature
│   │   ├── [...]
│   │   └── step-definitions/registration    # Steps para execução da automação com Gherkin
│   │       ├── elementsVerification.steps.ts
│   │       ├── invalidEmail.steps.ts
│   │       ├── [...]
│
├── pages/
│   └── RegistrationPage.ts      # Page Object com métodos para interagir com os elementos da tela de registro
│
├── support/
│   └── hooks.ts                 # Configurações de antes/depois dos testes (browser, vídeo, etc)
│
├── utils/
│   └── generateRandomData.ts    # Função para gerar dados aleatórios
│
├── report/
│   ├── desktop.html              # Relatório HTML dos testes para cada resolução (gerado após execução local ou no GitHub Actions via link)
│   ├── [...]
│
├── videos/                      # Vídeos dos testes de cenários com falha
│
├── playwright.config.ts         # Configurações globais do Playwright
├── tsconfig.json                # Configurações do compilador TypeScript
├── package.json                 # Scripts e dependências do projeto
```

---

## 🚀 Como executar o projeto

- Necessário instalar o node.js: [baixar clicando aqui](https://nodejs.org/en/download)

### 1. Clonar o repositório

```bash
git clone https://github.com/luanalvesdaniel/projeto-selecao-qa-artia.git
cd projeto-selecao-qa-artia
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Instalar playwright

```bash
npx playwright install
```

### 4. Executar os testes em modo headless e em todas as resoluções (desktop, tablet e mobile)

```bash
npm run test:headless
```

### 5. Executar os testes em modo headed e em todas as resoluções (desktop, tablet e mobile)

```bash
npm run test:headed
```

### 6. Executar os testes em modo headless e em resolução padrão

```bash
npm run test
```

### Print de relatório

![image](https://github.com/user-attachments/assets/c2dedb27-6a75-4e11-95d2-c87f0752d4c8)

> Os relatórios serão gerado em `report/`.  
> Em caso de falha, o vídeo do teste será salvo na pasta `videos/`.

### 4. Executar via GitHub Actions

> No repositório, ir em **Actions**.  
> Clicar em **Node.js CI / Rodar Actions / Re-run all jobs**.
> Verificar que executa normalmente e em `Jobs / build / Upload HTML Report` é possível baixar os relatórios.

---

## 🧪 Cenários Implementados

- ✅ Validação dos principais elementos em tela
  - Garante que os elementos esperados estão visíveis em tela
- ✅ Registro com dados válidos
  - Caminho feliz pra garantir o que se espera de um cadastro correto
- ✅ Validação de idioma
  - Garante correta apresentação dos elementos nos 3 idiomas disponíveis da página (Português, Inglês e Espanhol)
- ✅ Testes em resoluções diferentes (desktop, tablet, celular)
  - Garante o correto funcionamento de interações e/ou validações nos elementos em tela
- ❌ Registro com senha inválida
  - Validar um cenário com senha incompleta segundo a regra de no mínimo de 6 caracteres
- ❌ Registro com telefone inválido
  - Validar o preenchimento incompleto de telefone (ex: sem informar o prefixo 9 ou com menos de 11 números)
- ❌ Registro com e-mail inválido
  - Garantir que não está sendo informado um e-mail genérico (gmail, hotmail, etc)
- ❌ Registro com e-mail já existente
  - Garantir que não é possível cadastrar usuário com e-mail já existente
- ❌ Registro com campos vazios
  - Garantir que não é possível realizar cadastro com campos vazios

---

## ⚠️ Problemas encontrados

- E-mail já existente: está retornando a seguinte mensagem após informar o e-mail: "translation missing: pt, Email já está sendo utilizado por outro usuário."
  - Acontece o mesmo nos outros idiomas (en, es)
- Validação de elementos: exceto pela resolução desktop, não funciona a validação da frase "Vamos começar a transformar seus planos em conquistas?"
  - O elemento que tem a frase desaparece, portanto essa feature está comentada no código (step e feature)

---

## 🧑‍💻 Autor

**Luan Alves Daniel**  
Desenvolvido como parte do desafio prático da Artia – Abril/2025.
