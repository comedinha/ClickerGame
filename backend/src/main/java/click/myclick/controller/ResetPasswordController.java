package click.myclick.controller;

import click.myclick.dto.PasswordResetDTO;
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
@RequestMapping("api/authPasswordReset")
public class ResetPasswordController {
    
    private final UserService service;
    private final PasswordRecovery passwordRecovery;

    @Autowired
    public ResetPasswordController(final UserService service, final PasswordRecovery passwordRecovery) {
        this.service = service;
        this.passwordRecovery = passwordRecovery;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> reset(@RequestBody final PasswordResetDTO dto) {

        switch(passwordRecovery.resetPassword(service, dto)) {
            case 0:
                return new ResponseEntity<>(HttpStatus.OK);
            case 1:
                return new ResponseEntity<>("B01", HttpStatus.BAD_REQUEST);
            case 2:
                return new ResponseEntity<>("B02", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>("C01", HttpStatus.BAD_REQUEST);
    }
}