package click.myclick.controller.auth;

import click.myclick.dto.auth.TokenDTO;
import click.myclick.security.service.TokenService;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.auth.CheckEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authGuest")
public class AuthenticationGuestController {

    @Autowired
    private final TokenService tokenService;
    private final UserService service;
    private final CheckEmail checkEmail;

    @Autowired
    public AuthenticationGuestController(final TokenService tokenService, final UserService service, 
                                    final CheckEmail checkEmail) {
        this.tokenService = tokenService;
        this.service = service;
        this.checkEmail = checkEmail;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> authenticate() throws Exception {

        final int code = checkEmail.isEnable(service, "test@test.com");

        if(code == 2) {
            return new ResponseEntity<>("A02", HttpStatus.BAD_REQUEST);
        } else {
            if(code == 1) {
                return new ResponseEntity<>("A03", HttpStatus.BAD_REQUEST);   
            }
        }

        final String token = tokenService.getToken("test@test.com", "test");

        if (token != null) {
            final TokenDTO response = new TokenDTO();
            response.setToken(token);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("A02", HttpStatus.BAD_REQUEST);
        }
    }

}
