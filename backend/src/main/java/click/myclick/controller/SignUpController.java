package click.myclick.controller;

import click.myclick.converter.ConverterFacade;
import click.myclick.dto.UserDTO;
import click.myclick.service.UserService;
import click.myclick.captcha.ICaptchaService;
import click.myclick.service.CheckEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/signup")
public class SignUpController {

    private final UserService service;
    private final ConverterFacade converterFacade;
    private final CheckEmail checkEmail;

    @Autowired
    private ICaptchaService captchaService;

    @Autowired
    public SignUpController(final UserService service, final ConverterFacade converterFacade,
                            final CheckEmail checkEmail) {
        this.service = service;
        this.converterFacade = converterFacade;
        this.checkEmail = checkEmail;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> signUp(@RequestBody final UserDTO dto) throws Exception {

        final String responseCaptcha = dto.getCaptcharesponse();

        if(!captchaService.processResponse(responseCaptcha)) {
            return new ResponseEntity<>("A01", HttpStatus.BAD_REQUEST);
        }

        if(checkEmail.checkExistingEmail(service, dto.getUsername()) == 0) {
            System.out.println("B03");
            return new ResponseEntity<>("B03", HttpStatus.BAD_REQUEST);
        }
        
        try {
            if(service.create(converterFacade.convert(dto)) != null)
                return new ResponseEntity<>(HttpStatus.OK);
            else
                return new ResponseEntity<>("C02", HttpStatus.BAD_REQUEST);
        } catch(Exception e) {
            return new ResponseEntity<>("C02", HttpStatus.BAD_REQUEST);
        }
    }

}
