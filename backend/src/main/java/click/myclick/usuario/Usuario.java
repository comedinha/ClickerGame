package click.myclick.usuario;

import org.springframework.data.annotation.Id;

public class Usuario {

    @Id
    public String id;

    public String usuario;
    public String senha;
    public String email;
    public String token;

    public Usuario(String usuario, String senha, String email) {
      this.usuario = usuario;
      this.senha = senha;
      this.email = email;
      this.token = "Teste";
    }

}