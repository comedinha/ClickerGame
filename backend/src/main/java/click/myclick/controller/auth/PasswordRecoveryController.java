package click.myclick.controller.auth;

import click.myclick.dto.PasswordRecoveryDTO;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.auth.PasswordRecovery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authPasswordRecovery")
public class PasswordRecoveryController {
    
    private final UserService service;
    private final PasswordRecovery passwordRecovery;

    @Autowired
    public PasswordRecoveryController(final UserService service, final PasswordRecovery passwordRecovery) {
        this.service = service;
        this.passwordRecovery = passwordRecovery;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> recovery(@RequestBody final PasswordRecoveryDTO dto) {
        
        switch(passwordRecovery.recovery(service, dto.getEmail())) {
            case 0:
                return new ResponseEntity<>(HttpStatus.OK);
            case 1:
                //Usuario não encontrado
                return new ResponseEntity<>("B01", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>("C01", HttpStatus.BAD_REQUEST);
    }
}