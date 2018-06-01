export default {
  signin: {
    title: 'Entrar',
    button: 'Entrar',

    forgotten: {
      title: 'Esqueci minha senha',
      text: 'Recuperar Senha',
      description: 'Digite seu endereço de email e enviaremos instruções de recuperação.',
      confirm: 'Se o endereço de email for correto nós enviamos as intruções.',
      button: 'Recuperar'
    },

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
      errorLimit: 'O nome deve ter ao menos {c} caracteres.'
    },
    password: {
      title: 'Senha: ',
      errorLimit: 'A senha deve ao menos {c} digitos.'
    },
    confirmPassword: {
      title: 'Confirmação: ',
      errorIdentical: 'A confirmação precisa ser identica a senha.'
    }
  }
}
