export default {
  signin: {
    title: 'Entrar',
    description: 'Descrição do Login',
    button: 'Entrar'
  },
  signup: {
    title: 'Cadastrar',
    description: 'Descrição do Cadastro',
    button: 'Registrar',

    required: 'Campo necessário.',
    errorRequired: 'Entre com os dados em todos os campos requeridos.',
    username: {
      title: 'Nome de usuário: ',
      errorLimit: 'O nome de usuário deve ter ao menos {c} caracteres.'
    },
    email: {
      title: 'Email: ',
      validEmail: 'Digite um endereço de email válido.'
    },
    password: {
      title: 'Senha: ',
      errorLimit: 'A senha deve ao menos {c} digitos.'
    },
    confirmPassword: {
      title: 'Confirme o password: ',
      errorIdentical: 'A confirmação precisa ser identica a senha.'
    }
  }
}
