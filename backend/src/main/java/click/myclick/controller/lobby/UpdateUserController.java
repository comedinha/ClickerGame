package click.myclick.controller.lobby;

import click.myclick.dto.lobby.AdminUserUpdateDTO;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.lobby.UpdateUserInformation;

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
@RequestMapping("/api/updateuser")
public class UpdateUserController {
    private final UserService service;
    private final UpdateUserInformation updatUserInformation;
    
    @Autowired
    public UpdateUserController(final UserService service, final UpdateUserInformation updatUserInformation) {
        this.service = service;
        this.updatUserInformation = updatUserInformation;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> update(@RequestBody final AdminUserUpdateDTO dto, Authentication auth) {
        
        if(!service.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C04", HttpStatus.BAD_REQUEST);
        
        final int code = updatUserInformation.adminUpdate(service, dto);
        
        if(code == 0)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            if(code == 1)
                return new ResponseEntity<>("A04", HttpStatus.BAD_REQUEST);
            else
                return new ResponseEntity<>("C02", HttpStatus.BAD_REQUEST);
    }
}