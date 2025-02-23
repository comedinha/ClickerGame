package click.myclick.controller.lobby.get;

import click.myclick.service.dao.user.UserService;
import click.myclick.service.lobby.GetInfoLobby;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/getallusers")
public class GetAllUsersControllers {

    private final GetInfoLobby getInfoLobby;
    private final UserService service;

    @Autowired
    public GetAllUsersControllers(GetInfoLobby getInfoLobby, UserService service) {
        this.getInfoLobby = getInfoLobby;
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("GetAllUsers");

        if(!service.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C03", HttpStatus.BAD_REQUEST);
        
        return new ResponseEntity<>(getInfoLobby.getAllUsers(service), HttpStatus.OK);
    }
}
