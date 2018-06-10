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
        System.out.println("controller 0");

        if(checkTokenEmail.checkToken(service, dto.getCode())) {
            System.out.println("controller ok");
            return new ResponseEntity<>(HttpStatus.OK);    
        } else {
            System.out.println("controller bad");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        
    }
}