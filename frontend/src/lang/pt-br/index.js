export default {
  game: {
    name: 'My Click',
    year: '2018'
  },

  error: {
    UNK: '{e}: contacte a equipe!',

    A01: 'Algo de errado aconteceu com o captcha, favor tentar novamente.',
    A02: 'Endereço de email ou senha incorretos.',
    A03: 'O endereço de email não foi ativado, favor verificar seu email.',

    B01: 'O usuário não foi encontrado.',
    B02: 'O token é invalido.',
    B03: 'O endereço de email já está cadastrado.',

    C01: 'Algum erro inesperado aconteceu, se persistir contacte a equipe.',
    C02: 'Ocorreu um erro ao criar o usuário.'
  },

  auth: {
    email: {
      button: 'Ativar',

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

        required: 'Campo necessário.',
        errorRequired: 'Entre com os dados em todos os campos requeridos.',

        email: 'Email: ',
        validEmail: 'Digite um endereço de email válido.'
      }
    }
  },

  lobby: {
    block: {
      bestRated: {
        title: 'Cenários melhores avaliados'
      },

      mostPlayed: {
        title: 'Cenários mais jogados'
      },

      myScenes: {
        title: 'Meus Cenários',
        pagination: '{a} de {t}',
        button: 'Criar Cenário',

        scene: {
          edit: 'Editar'
        }
      },

      played: {
        title: 'Cenários que você jogou',
        pagination: 'Página {a} de {t}',
        search: 'Buscar',

        scene: {
          play: 'Jogar'
        }
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
      news: {
        title: 'Últimas Noticias',
        adminButton: 'Nova',

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
