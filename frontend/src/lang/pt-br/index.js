export default {
  game: {
    name: 'My Click',
    year: '2018',

    true: 'verdadeiro',
    false: 'falso',

    ROLE_ADMIN: 'Administrador',
    ROLE_USER: 'Usuário',
    ANONYMOUS: 'Anônimo'
  },

  error: {
    UNK: '{e}: contacte a equipe!',
    notConnected: 'Houve um problema de conexão, tente novamente mais tarde.',
    noData: 'Sem dados disponíveis.',

    A01: 'Algo de errado aconteceu com o captcha, favor tentar novamente.',
    A02: 'Endereço de email ou senha incorretos.',
    A03: 'O endereço de email não foi ativado, favor verificar seu email.',
    A04: 'Senha incorreta.',

    B01: 'O usuário não foi encontrado.',
    B02: 'O token é invalido.',
    B03: 'O endereço de email já está cadastrado.',

    C01: 'Algum erro inesperado aconteceu, se persistir contacte a equipe.',
    C02: 'Ocorreu um erro ao efetuar o registro do jogador.',
    C03: 'Acesso não autorizado'
  },

  auth: {
    email: {
      button: 'Ativar',
      success: 'O endereço de email esta ativo.',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',

      token: {
        title: 'Token: '
      },

      username: {
        title: 'Email: ',
        validEmail: 'Entre com um endereço de email válido.'
      }
    },

    resetPassword: {
      button: 'Editar Senha',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve possuir ao menos {c} digitos.'
      },
      confirmPassword: {
        title: 'Confirmação: ',
        errorIdentical: 'A confirmação precisa ser idêntica a senha.'
      }
    },

    signin: {
      title: 'Entrar',
      button: 'Entrar',
      guest: 'Entrar como visitante',
      recovery: 'Esqueci minha Senha',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      email: {
        title: 'Email: ',
        validEmail: 'Entre com um endereço de email válido.'
      },
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve possuir ao menos {c} digitos.'
      }
    },

    signup: {
      title: 'Cadastrar',
      description: 'Descrição do Cadastro',
      button: 'Registrar',
      success: 'Ok, Nós lhe enviaremos instruções para a ativação da conta.',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      username: {
        title: 'Email: ',
        validEmail: 'Entre com um endereço de email válido.',

        existEmail: 'O endereço de email já esta cadastrado.'
      },
      name: {
        title: 'Nome: ',
        minLength: 'O nome deve possuir no mínimo {c} caracteres.',
        maxLength: 'O nome deve possuir no máximo {c} caracteres.'
      },
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve possuir ao menos {c} digitos.'
      },
      confirmPassword: {
        title: 'Confirmação: ',
        errorIdentical: 'A confirmação precisa ser idêntica a senha.'
      }
    },

    dialog: {
      recovery: {
        text: 'Recuperar Senha',
        description: 'Entre com seu endereço de email e enviaremos as instruções de recuperação.',
        confirm: 'Ok, nós lhe enviaremos as intruções.',
        button: 'Recuperar',
        cancel: 'Cancelar',

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',

        email: 'Email: ',
        validEmail: 'Entre com um endereço de email válido.'
      }
    }
  },

  lobby: {
    lobby: {
      news: 'Últimas notícias',
      allScenes: 'Todos os cenários',
      lobby: 'Lobby',
      loading: 'Carregando...',

      approval: 'Aguardando aprovação',
      reported: 'Denúncias',
      users: 'Usuários',

      approved: 'Aguardando aprovação',
      deleted: 'Fase deletada',
      enabled: 'Não foi publicado',
      edit: 'Editar',
      details: 'Detalhes',
      newScene: 'Novo Jogo',
      continue: 'Continuar',
      play: 'Jogar'
    },

    block: {
      ads: {
        title: 'Anúncio'
      },

      allScenes: {
        title: 'Todos os Cenários',
        pagination: 'Página {a} de {t}',
        search: 'Buscar'
      },

      bestRated: {
        title: 'Melhor avaliados'
      },

      guestMessage: {
        title: 'Anônimo',
        logout: 'Desconectar',

        content: `
          <p>Por voc&ecirc; ser um usu&aacute;rio an&ocirc;nimo suas fun&ccedil;&otilde;es no game s&atilde;o limitadas,&nbsp;por exemplo voc&ecirc;&nbsp;<strong>n&atilde;o pode&nbsp;salvar seu progresso</strong> e<strong> nem</strong> <strong>criar cen&aacute;rios</strong>.</p>

          <p>Isso se deve ao fato de que n&atilde;o permitimos salvar o progresso em <strong>modo offline</strong>&nbsp;e o modo an&ocirc;nimo ser apenas uma <strong>demonstra&ccedil;&atilde;o</strong>.</p>

          <p>Quando voc&ecirc; se registra voc&ecirc; consegue todos esses benef&iacute;cios al&eacute;m de ajudar a comunidade a crescer.</p>
        `
      },

      mostPlayed: {
        title: 'Mais jogados'
      },

      myScenes: {
        title: 'Meus Cenários',
        pagination: '{a} de {t}',
        button: 'Criar Cenário'
      },

      played: {
        title: 'Cenários que você jogou',
        pagination: 'Página {a} de {t}',
        search: 'Buscar'
      }
    },

    dialog: {
      approval: {
        title: 'Aguardando aprovação',
        pagination: 'Página {a} de {t}',
        close: 'Fechar'
      },

      editUser: {
        title: 'Editar usuário',
        button: 'Editar',
        cancel: 'Cancelar',

        select: 'Selecione',
        enabled: 'Ativo',
        allowApproval: 'Permitir publicar',

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',
        name: {
          title: 'Nome: ',
          minLength: 'O nome deve possuir no mínimo {c} caracteres.',
          maxLength: 'O nome deve possuir no máximo {c} caracteres.'
        },
        email: {
          title: 'Email: ',
          email: 'Entre com um endereço de email válido.'
        },
        password: {
          title: 'Senha: ',
          errorLimit: 'A senha deve possuir ao menos {c} digitos.'
        },
        confirmPassword: {
          title: 'Confirmação: ',
          errorIdentical: 'A confirmação precisa ser idêntica a senha.'
        }
      },

      report: {
        title: 'Denunciados',
        pagination: 'Página {a} de {t}',
        close: 'Fechar'
      },

      sceneDetail: {
        description: 'Descrição',
        creator: 'Criador',
        played: 'Jogaram',
        score: 'Avaliação',

        close: 'Fechar'
      },

      users: {
        title: 'Usuários',
        search: 'Buscar',
        close: 'Fechar',

        pagination: 'Página {a} de {t}',
        searchError: 'O termo {s} não foi encontrado.',
        delete: 'Você realmente deseja excluir o usuário {u}?',

        name: 'Nome',
        email: 'Email',
        role: 'Cargo',
        action: 'Ação',
        enabled: 'Ativado'
      }
    }
  },

  template: {
    index: {
      user: {
        information: 'Editar informações',
        logout: 'Desconectar'
      }
    },

    dialog: {
      addNews: {
        title: 'Adicionar Noticia',
        addTitle: 'Título:',

        cancel: 'Cancelar',
        add: 'Adicionar',

        required: 'Preencha os campos necessários'
      },

      news: {
        title: 'Últimas Noticias',
        adminButton: 'Nova',
        close: 'Fechar'
      },

      updateInformation: {
        title: 'Atualizar Informações',
        description: 'Os campos em branco terão suas informações mantidas.',
        button: 'Salvar',
        close: 'Fechar',

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',
        name: {
          title: 'Nome: ',
          minLength: 'O nome deve possuir no mínimo {c} caracteres.',
          maxLength: 'O nome deve possuir no máximo {c} caracteres.'
        },
        password: {
          title: 'Senha: ',
          errorLimit: 'A senha deve possuir ao menos {c} digitos.'
        },
        confirmPassword: {
          title: 'Confirmação: ',
          errorIdentical: 'A confirmação precisa ser idêntica a senha.'
        },
        oldPassword: {
          title: 'Senha atual: '
        }
      }
    }
  }
}
