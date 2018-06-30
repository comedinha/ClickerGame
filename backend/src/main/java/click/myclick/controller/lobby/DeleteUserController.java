package click.myclick.controller.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.dto.lobby.DeleteUserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/deleteuser")
public class DeleteUserController {
    private final UserService service;
    
    @Autowired
    public DeleteUserController(final UserService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> emailCheck(@RequestBody final DeleteUserDTO dto, Authentication auth) {

        if(!service.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C03", HttpStatus.BAD_REQUEST);

        try {
            return new ResponseEntity<>(service.delete(dto.getId()), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>("C02", HttpStatus.OK);
        }
    }
}