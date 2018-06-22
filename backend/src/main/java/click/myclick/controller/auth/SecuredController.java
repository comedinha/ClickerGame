package click.myclick.controller.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "x-auth-token")
@RestController
@RequestMapping("/api/hello")
public class SecuredController {

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> sayHello(Authentication auth) {
        return new ResponseEntity<>("Secured hello " + auth.getName() + "!", HttpStatus.OK);
    }

}
