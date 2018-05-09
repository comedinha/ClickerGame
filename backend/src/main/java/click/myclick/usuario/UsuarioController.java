package click.myclick.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @RequestMapping("/usuario/{name}")
    public List<Usuario> getRecognition(@PathVariable("name") String name){
        return repository.findByUsuario(name);
    }

    @RequestMapping("/usuarios")
    public List<Usuario> getUsuarios(){
        System.out.println("USuario");
        return repository.findAll();
    }

    @PostMapping("/usuario")
    public ResponseEntity<String> addColleague(@RequestBody Usuario usuario){
        repository.save(usuario);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //This is of course a very naive implementation! We are assuming unique names...
    @DeleteMapping("/usuario/{name}")
    public ResponseEntity<String> deleteColleague(@PathVariable String name){
        List<Usuario> usuario = repository.findByUsuario(name);
        if(usuario.size() == 1) {
            Usuario colleague = usuario.get(0);
            repository.delete(colleague);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}