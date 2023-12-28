# Meu Money - aplicativo de gerenciamento de despesas.

Este projeto é um repositório para uma API de um Sitema de gerenciamento de despesas domésticas. Essa API integra-se com o servidor para permitir o acesso e manipulação de dados de forma segura e eficiente.

Este é um projeto desenvolvido por Luiz Felipe Reis em parceria com Maurilio Menezes em outubro de 2023 e está em constante evolução e aprimoramento.

## Funções:
* Criar usuários;
* Realizar logins;
* Listar usuário logado;
* Atualizar perfil do usuário logado;
* Listar Categorias;
* Criar Transações para o usuário logado;
* Listar todas as Transações do usuário logado;
* Detalhar pelo ID uma Transação do usuário logado;
* Atualizar Transações do usuário logado;
* Deletar Transações do usuário logado;
* Exibir extrato do usuário logado;

## Código-fonte:

![Screenshot from 2023-10-17 13-55-26](https://github.com/DevFelipreis/meu-money/assets/134344282/40b24ab2-9470-44b7-9606-f163e15e1a71)



```index.js```: O ponto de entrada do servidor Express.

```router.js```: Define as rotas da API e seus controladores.

## Tecnologias usadas:

### JavaScript:
Linguagem de programação de alto nível amplamente utilizada para desenvolvimento web. Ela é conhecida por ser uma linguagem de script, o que significa que você pode escrever código JavaScript diretamente em páginas da web para torná-las interativas e dinâmicas.

### Node.js: 
Ambiente de tempo de execução (runtime) de código aberto baseado na engine V8 do Google Chrome. Ele permite que os desenvolvedores utilizem JavaScript para criar aplicativos de servidor, o que é um desvio do uso tradicional do JavaScript no lado do cliente, que é executado nos navegadores.

### PostgreSQL: 
Sistema de gerenciamento de banco de dados relacional (RDBMS, sigla em inglês para Relational Database Management System) de código aberto e gratuito. Ele é amplamente reconhecido por sua robustez, escalabilidade e recursos avançados, tornando-o uma escolha popular para muitos aplicativos, desde pequenos projetos até sistemas corporativos de grande escala.

### Dependências:
**bcrypt:** biblioteca em JavaScript que é frequentemente usada para criptografar senhas e proteger informações sensíveis. Ela fornece um meio seguro de armazenar senhas em um banco de dados, tornando mais difícil para um possível invasor decifrar as senhas em texto simples. 
Abra o terminal ou prompt de comando, navegue até o diretório do seu projeto e execute o seguinte comando: ```npm install bcrypt```

**express PG:** uma combinação do Node.js com o framework web Express.js e o banco de dados PostgreSQL (PG). Quando essas três tecnologias são usadas juntas, é comum referir-se a elas como "Express PG" para indicar que se está construindo uma aplicação web com Express.js que se conecta a um banco de dados PostgreSQL. 
Abra o terminal ou prompt de comando, navegue até o diretório do seu projeto e execute o seguinte comando: ```npm install express pg```

**jsonwebtoken:** padrão aberto (RFC 7519) que define uma maneira compacta e independente de transmitir informações entre duas partes de uma forma que pode ser verificada e confiável. Os JWTs são usados para transmitir informações entre um cliente e um servidor de forma segura e autenticada. Eles são frequentemente usados em sistemas de autenticação e autorização. 
Abra o terminal ou prompt de comando, navegue até o diretório do seu projeto e execute o seguinte comando: ```npm install jsonwebtoken```


### devDependencies:
**nodemon:** Uma ferramenta de desenvolvimento que monitora alterações em arquivos no diretório do seu projeto e reinicia automaticamente o servidor sempre que há uma alteração. É frequentemente usado para desenvolvimento em Node.js para economizar tempo na reinicialização do servidor durante o desenvolvimento.
As dependências são bibliotecas ou pacotes necessários para o funcionamento do seu aplicativo, enquanto as devDependencies são pacotes usados apenas durante o desenvolvimento, como no caso do nodemon, que ajuda a manter o servidor atualizado durante o desenvolvimento.
Abra o terminal ou prompt de comando, navegue até o diretório do seu projeto e execute o seguinte comando: ```npm install -D nodemon```. Para executar o nodemon navegue até o diretório do seu projeto e execute o seguinte comando: ```nodemon meu_arquivo.js```

Após clonar este repositório, você pode instalar todas as dependências e devDependencies usando o comando: ```npm install```

## Preparar o projeto:
**Clone o repositório**: Abra o terminal e use o comando: ```git clone "git@github.com:DevFelipreis/meu-money.git"```

![Screenshot from 2023-10-17 13-52-28](https://github.com/DevFelipreis/meu-money/assets/134344282/ae363f8d-065a-4d6f-a085-5262883f0ad0)


**Instale o npm**: ```npm install```. O npm (Node Package Manager) é o gerenciador de pacotes padrão para a plataforma Node.js. Ele é uma ferramenta que permite a instalação, gerenciamento e distribuição de pacotes de software escritos em JavaScript. O npm é uma parte essencial do ecossistema Node.js.

**Lembrando que é necessário especificar o caminho correto para a instalação.**
```cd /home/<seu_nome_de_usuário>/Documentos/MeuProjeto```

**Licença:** Este projeto está sob uma licença de código aberto que permite a colaboração de qualquer pessoa interessada em contribuir para melhorias e desenvolvimento. Todos são bem-vindos a fazer contribuições para o projeto.

**Agradecimentos:** Gostaríamos de expressar minha gratidão ao meu colega [Maurilio Menezes](https://github.com/MauriMenezes) que foi co-criador nesse
projeto.

**Links Úteis:**

- [JavaScript - Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Express PG - Documentação]( https://node-postgres.com/)
- [Postgresql - Documentação]( https://www.postgresql.org/docs/)
- [Nodemon - Documentação]( https://nodemon.io/)
- [bcrypt - Documentação]( https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken - Documentação](https://www.npmjs.com/package/jsonwebtoken)
- [npm - Documentação](https://docs.npmjs.com/)
- [Baixar o Visual Studio Code (VSCode)](https://code.visualstudio.com/)
- [Baixar o Insomnia](https://insomnia.rest/)
- [Baixar o Beekeeper](https://github.com/beekeeper-studio/beekeeper-studio)

**Atualizações Futuras:** Este projeto encontra-se na sua versão Alfa, indicando que ainda está em desenvolvimento ativo. Estamos comprometidos em continuar aprimorando e atualizando este projeto para oferecer novos recursos e melhorias no futuro. Agradecemos antecipadamente pelo seu interesse e contribuições à medida que continuamos a evoluir este projeto.

**Contato:**
- [LinkedIn](https://www.linkedin.com/in/devlfreis/)
- E-mail: [lfreis.contato@gmail.com](mailto:lfreis.contato@gmail.com)  
