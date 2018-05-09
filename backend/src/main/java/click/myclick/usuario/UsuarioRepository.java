package click.myclick.usuario;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
 
public interface UsuarioRepository extends MongoRepository<Usuario, String> {
  public List<Usuario> findByUsuario(String usuario);
}