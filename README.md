# Fake Store - React Native

Aplicação mobile desenvolvida em React Native que integra a [Fake Store API](https://fakestoreapi.com) para exibir e gerenciar produtos de uma loja virtual.

##  Recursos

-  Autenticação de usuários
-  Listagem de produtos
-  Detalhes de produtos
-  Informações do grupo
-  Interface intuitiva com React Native

##  Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v16 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn**
- **Expo CLI** - instale globalmente com:
  ```bash
  npm install -g expo-cli
  ```

##  Instalação

1. Clone o repositório ou extraia os arquivos do projeto
2. Navegue até o diretório do projeto:
   ```bash
   cd react-native-fake-store
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

##  Como rodar o projeto com Expo

### Opção 1: Iniciar em ambiente de desenvolvimento

```bash
npm start
```

Isso abrirá o Expo DevTools no terminal. Você pode:

- **Pressionar `a`** para abrir no emulador Android
- **Pressionar `i`** para abrir no simulador iOS (apenas em macOS)
- **Pressionar `w`** para abrir no navegador (versão web)

### Opção 2: Executar em plataforma específica

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Web
```bash
npm run web
```

### Opção 3: Usar o Expo Go (celular físico)

1. Instale o app "Expo Go" na Play Store ou App Store
2. Execute `npm start`
3. Escaneie o código QR exibido no terminal com seu celular

##  Usuários de Teste para Login

A aplicação utiliza a **Fake Store API** que fornece os seguintes usuários de teste:

| Username | Senha   |
| 'johnd'  | m38rmF$ |

Para mais informações sobre a API, visite: https://fakestoreapi.com

## 📁 Estrutura do Projeto

```
react-native-fake-store/
├── App.js                 # Componente principal
├── index.js              # Ponto de entrada
├── package.json          # Dependências do projeto
├── assets/               # Imagens e recursos
├── src/
│   ├── screens/          # Telas da aplicação
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── DetailsScreen.js
│   │   └── GroupInfoScreen.js
│   ├── services/         # Serviços de API
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── productsService.js
│   └── routes/           # Configuração de navegação
│       └── index.js
```

##  Integrantes do Grupo

| Nome | RA |
|------|-----|
| Brayan Lima | 1132051 |
| Rafaela Bilibio | 1137885 |

##  Tecnologias Utilizadas

- **React Native** - Framework para aplicações móveis
- **Expo** - Plataforma para desenvolvimento React Native
- **React Navigation** - Navegação entre telas
- **Axios** - Cliente HTTP para chamadas de API
- **Fake Store API** - API de teste para produtos
---

**Desenvolvido por Brayan Lima e Rafaela Bilibio**