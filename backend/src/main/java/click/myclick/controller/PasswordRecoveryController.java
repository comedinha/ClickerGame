package click.myclick.controller;

import click.myclick.dto.PasswordRecoveryDTO;
import click.myclick.service.UserService;
import click.myclick.service.PasswordRecovery;

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
        System.out.println("Controller");
        if(passwordRecovery.recovery(service, dto.getUsername())) {
            return new ResponseEntity<>(HttpStatus.OK);    
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}