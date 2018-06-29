package click.myclick.controller.lobby;

import click.myclick.service.dao.scene.SceneService;
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

    @Autowired
    public GetApprovalController(GetInfoLobby getInfoLobby, SceneService service) {
        this.getInfoLobby = getInfoLobby;
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("getApproval");
        
        return new ResponseEntity<>(getInfoLobby.getApproval(service) , HttpStatus.OK);
        
    }
}
