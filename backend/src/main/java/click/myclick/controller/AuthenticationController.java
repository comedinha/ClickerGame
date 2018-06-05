package click.myclick.controller;

import click.myclick.dto.LoginDTO;
import click.myclick.dto.TokenDTO;
import click.myclick.captcha.ICaptchaService;
import click.myclick.security.service.TokenService;

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

    @Autowired
    public AuthenticationController(final TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> authenticate(@RequestBody final LoginDTO dto) throws Exception {
        final String responseCaptcha = dto.getCaptcharesponse();
        System.out.println(responseCaptcha);
        captchaService.processResponse(responseCaptcha);

        if(!captchaService.getReCaptchaSecret().equals("6Lfk1FwUAAAAAKvC6emvdIdGmwiBiiR-V7t6Da13")) {
            return new ResponseEntity<>("Authentication failed", HttpStatus.BAD_REQUEST);
        }

        final String token = tokenService.getToken(dto.getUsername(), dto.getPassword());
        if (token != null) {
            final TokenDTO response = new TokenDTO();
            response.setToken(token);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Authentication failed", HttpStatus.BAD_REQUEST);
        }
    }

}
