package click.myclick.controller.auth;

import click.myclick.dto.LoginDTO;
import click.myclick.dto.TokenDTO;
import click.myclick.captcha.ICaptchaService;
import click.myclick.security.service.TokenService;
import click.myclick.service.UserService;
import click.myclick.service.CheckEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private final TokenService tokenService;

    @Autowired
    private ICaptchaService captchaService;

    private final UserService service;
    private final CheckEmail checkEmail;

    @Autowired
    public AuthenticationController(final TokenService tokenService, final UserService service, 
                                    final CheckEmail checkEmail) {
        this.tokenService = tokenService;
        this.service = service;
        this.checkEmail = checkEmail;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> authenticate(@RequestBody final LoginDTO dto) throws Exception {

        final String responseCaptcha = dto.getCaptcharesponse();

        if(!captchaService.processResponse(responseCaptcha)) {
            return new ResponseEntity<>("A01", HttpStatus.BAD_REQUEST);
        }

        if(checkEmail.isEnable(service, dto.getUsername()) == 2) {
            return new ResponseEntity<>("A02", HttpStatus.BAD_REQUEST);
        } else {
            if(checkEmail.isEnable(service, dto.getUsername()) == 1) {
                return new ResponseEntity<>("A03", HttpStatus.BAD_REQUEST);   
            }
        }

        final String token = tokenService.getToken(dto.getUsername(), dto.getPassword());

        if (token != null) {
            final TokenDTO response = new TokenDTO();
            response.setToken(token);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("A02", HttpStatus.BAD_REQUEST);
        }
    }

}
