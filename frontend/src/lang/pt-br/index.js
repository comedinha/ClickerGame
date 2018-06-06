export default {
  game: {
    name: 'My Click',
    year: '2018'
  },

  auth: {
    email: {
      title: 'Código: ',
      button: 'Ativar',

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.'
    },

    signin: {
      title: 'Entrar',
      button: 'Entrar',
      guest: 'Entrar como anônimo',
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

      required: 'Campo necessário.',
      errorRequired: 'Entre com os dados em todos os campos requeridos.',
      username: {
        title: 'Email: ',
        validEmail: 'Digite um endereço de email válido.'
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
      mostplayed: {
        title: 'Cenários mais jogados'
      },

      myscenes: {
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
      },

      recentcreated: {
        title: 'Cenários recém criados'
      }
    }
  },

  template: {
    index: {
      user: {
        changePassword: 'Editar Senha',
        preferences: 'Preferências',
        logout: 'Desconectar'
      }
    }
  }
}
