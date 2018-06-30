package click.myclick.controller.lobby.get;

import click.myclick.service.dao.scene.SceneService;
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
@RequestMapping("/api/getapproval")
public class GetApprovalController {

    private final GetInfoLobby getInfoLobby;
    private final SceneService service;
    private final UserService uService;

    @Autowired
    public GetApprovalController(GetInfoLobby getInfoLobby, SceneService service, UserService uService) {
        this.getInfoLobby = getInfoLobby;
        this.service = service;
        this.uService = uService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("getApproval");

        if(!uService.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C03", HttpStatus.BAD_REQUEST);
        
        return new ResponseEntity<>(getInfoLobby.getApproval(service) , HttpStatus.OK);
        
    }
}
