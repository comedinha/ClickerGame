package click.myclick.controller;

import click.myclick.dto.UserUpdateDTO;
import click.myclick.service.UserService;
import click.myclick.service.UpdateUserInformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/updateInformation")
public class UpdateUserInformationController {
    private final UserService service;
    private final UpdateUserInformation updatUserInformation;

    @Autowired
    public UpdateUserInformationController(final UserService service, 
                                           final UpdateUserInformation updatUserInformation) {
        this.service = service;
        this.updatUserInformation = updatUserInformation;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> emailCheck(@RequestBody final UserUpdateDTO dto, Authentication auth) {
        System.out.println("Email:" + auth.getPrincipal().toString());
        final int code = updatUserInformation.update(service, dto, auth.getPrincipal().toString());
        
        if(code == 0)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            if(code == 1)
                return new ResponseEntity<>("A04", HttpStatus.BAD_REQUEST);
            else
                return new ResponseEntity<>("C02", HttpStatus.BAD_REQUEST);
    }
}