package click.myclick.controller;

import click.myclick.dto.CodeDTO;
import click.myclick.service.CheckTokenEmail;
import click.myclick.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authEmail")
public class EmailController {
    private final CheckTokenEmail checkTokenEmail;
    private final UserService service;

    @Autowired
    public EmailController(final CheckTokenEmail checkTokenEmail, final UserService service) {
        this.checkTokenEmail = checkTokenEmail;
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> emailCheck(@RequestBody final CodeDTO dto) {

        switch(checkTokenEmail.checkToken(service, dto)) {
            case 0:
                //Token valido
                return new ResponseEntity<>(HttpStatus.OK);
            case 1:
                //Usuario não encontrado
                return new ResponseEntity<>("B01", HttpStatus.BAD_REQUEST);
            case 2:
                //token invalido
                return new ResponseEntity<>("B02", HttpStatus.BAD_REQUEST);
        }

        //erro inesperado
        return new ResponseEntity<>("C01", HttpStatus.BAD_REQUEST);
    }
}