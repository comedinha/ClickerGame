package click.myclick.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class SecuredController {

    @CrossOrigin(allowedHeaders = "x-auth-token")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> sayHello(Authentication auth) {
        return new ResponseEntity<>("Secured hello " + auth.getName() + "!", HttpStatus.OK);
    }
}
