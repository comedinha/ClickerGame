export default {
  game: {
    name: 'My Click',
    year: '2018'
  },

  error: {
    UNK: '{e}: contacte a equipe!',
    notConnected: 'Houve um problema de conexão, tente novamente mais tarde.',

    A01: 'Algo de errado aconteceu com o captcha, favor tentar novamente.',
    A02: 'Endereço de email ou senha incorretos.',
    A03: 'O endereço de email não foi ativado, favor verificar seu email.',
    A04: 'Senha incorreta.',

    B01: 'O usuário não foi encontrado.',
    B02: 'O token é invalido.',
    B03: 'O endereço de email já está cadastrado.',

    C01: 'Algum erro inesperado aconteceu, se persistir contacte a equipe.',
    C02: 'Ocorreu um erro ao criar o usuário.'
  },

  auth: {
    email: {
      button: 'Ativar',
      success: 'O endereço de email foi ativo.',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',

      token: {
        title: 'Token: '
      },

      username: {
        title: 'Email: ',
        validEmail: 'Digite um endereço de email válido.'
      }
    },

    resetPassword: {
      button: 'Trocar Senha',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve ao menos {c} digitos.'
      },
      confirmPassword: {
        title: 'Confirmação: ',
        errorIdentical: 'A confirmação precisa ser identica a senha.'
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
        validEmail: 'Digite um endereço de email válido.'
      },
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve ao menos {c} digitos.'
      }
    },

    signup: {
      title: 'Cadastrar',
      description: 'Descrição do Cadastro',
      button: 'Registrar',
      success: 'Se o endereço de email estiver correto nós lhe enviamos instruções para a ativação da conta.',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      username: {
        title: 'Email: ',
        validEmail: 'Digite um endereço de email válido.',

        existEmail: 'O endereço de email já esta cadastrado.'
      },
      name: {
        title: 'Nome: ',
        minLength: 'O nome deve ter no mínimo {c} caracteres.',
        maxLength: 'O nome deve ter no máximo {c} caracteres.'
      },
      password: {
        title: 'Senha: ',
        errorLimit: 'A senha deve ao menos {c} digitos.'
      },
      confirmPassword: {
        title: 'Confirmação: ',
        errorIdentical: 'A confirmação precisa ser identica a senha.'
      }
    },

    dialog: {
      recovery: {
        text: 'Recuperar Senha',
        description: 'Digite seu endereço de email e enviaremos instruções de recuperação.',
        confirm: 'Se o endereço de email for correto nós enviamos as intruções.',
        button: 'Recuperar',
        cancel: 'Cancelar',

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',

        email: 'Email: ',
        validEmail: 'Digite um endereço de email válido.'
      }
    }
  },

  lobby: {
    lobby: {
      news: 'Últimas notícias',
      allScenes: 'Todos os cenários',
      lobby: 'Lobby',

      approved: 'Precisa ser avaliado pela equipe!',
      edit: 'Editar',
      details: 'Detalhes',
      newGame: 'Novo Jogo',
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
        title: 'Cenários melhores avaliados'
      },

      guestMessage: {
        title: 'Vantagens'
      },

      mostPlayed: {
        title: 'Cenários mais jogados'
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
        title: 'Aguardando Aprovação',
        pagination: 'Página {a} de {t}'
      },

      report: {
        title: 'Denunciados',
        pagination: 'Página {a} de {t}'
      }
    }
  },

  template: {
    index: {
      user: {
        information: 'Mudar Informações',
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
        close: 'Fechar',

        noNews: 'Não há noticias adicionadas no momento.'
      },

      updateInformation: {
        title: 'Atualizar Informações',
        description: 'Se algum campo for deixado em branco as informações serão mantidas.',
        button: 'Salvar',

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',
        name: {
          title: 'Nome: ',
          minLength: 'O nome deve ter no mínimo {c} caracteres.',
          maxLength: 'O nome deve ter no máximo {c} caracteres.'
        },
        password: {
          title: 'Senha: ',
          errorLimit: 'A senha deve ao menos {c} digitos.'
        },
        confirmPassword: {
          title: 'Confirmação: ',
          errorIdentical: 'A confirmação precisa ser identica a senha.'
        },
        oldPassword: {
          title: 'Senha atual: '
        }
      }
    }
  }
}
