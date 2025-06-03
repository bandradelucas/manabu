src/
├── modules/                        # Módulos principais da aplicação
│   ├── auth/                       # Módulo de autenticação
│   │   ├── dtos/                   # DTOs de autenticação (login, registro, etc)
│   │   ├── controllers/             # Controladores de autenticação
│   │   ├── providers/               # Lógica de autenticação (services)
│   │   ├── strategies/              # Estratégias de autenticação (ex.: Google, Local)
│   │   ├── auth.module.ts           # Módulo de autenticação
│   │   └── auth.service.ts          # Serviço de autenticação
│   ├── users/                       # Módulo de usuários
│   │   ├── dtos/                   # DTOs de usuários
│   │   ├── controllers/             # Controladores de usuários
│   │   ├── providers/               # Lógica de usuários (services)
│   │   ├── models/                  # Modelos do usuário (prisma, drizzle, etc)
│   │   ├── users.module.ts          # Módulo de usuários
│   │   └── users.service.ts         # Serviço de usuários
│   ├── posts/                       # Módulo de posts (exemplo de outra funcionalidade)
│   └── ...                          # Outros módulos, como produtos, pedidos, etc.
├── config/                          # Arquivos de configuração
│   ├── app.config.ts                # Configuração geral da aplicação
│   ├── database.config.ts           # Configuração de banco de dados
│   └── ...                          # Outras configurações (API keys, etc.)
├── database/                        # Arquivos relacionados ao banco de dados
│   ├── migrations/                  # Migrations do banco
│   │   ├── 20230224000000-create-users-table.ts # Exemplo de migration
│   ├── models/                      # Modelos de banco de dados (entidades)
│   │   ├── user.model.ts            # Exemplo de modelo de usuário (drizzle, prisma, etc.)
│   │   └── ...                      # Outros modelos
│   ├── database.module.ts           # Módulo que gerencia a conexão com o banco
│   └── database.service.ts          # Serviço para interagir com o banco
├── common/                          # Reutilizáveis, utilitários e helpers
│   ├── filters/                     # Filtros de exceções personalizadas (e.g., NotFound, BadRequest)
│   ├── interceptors/                # Interceptores (logging, transformação de dados, etc)
│   ├── pipes/                       # Validação e transformação de dados
│   ├── decorators/                  # Decoradores personalizados (e.g., @Public, @Roles)
│   └── constants.ts                 # Constantes globais
├── shared/                          # Funcionalidades compartilhadas
│   ├── logger/                      # Serviço de logger
│   ├── email/                       # Serviço de envio de e-mail (com integração de provedor como o Postal)
│   └── ...                          # Outros serviços compartilhados
├── main.ts                          # Ponto de entrada da aplicação
└── app.module.ts                    # Módulo raiz, que importa todos os módulos necessários
