package click.myclick.controller.lobby.get;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.lobby.GetInfoLobby;
import click.myclick.dto.lobby.DeleteUserDTO;

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
@RequestMapping("/api/getapproval")
public class GetScenesUser {

    private final GetInfoLobby getInfoLobby;
    private final SceneService sceneService;
    private final UserService userService;

    @Autowired
    public GetScenesUser(GetInfoLobby getInfoLobby, SceneService sceneService, UserService userService) {
        this.getInfoLobby = getInfoLobby;
        this.sceneService = sceneService;
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(@RequestBody final DeleteUserDTO dto, Authentication auth) {
        System.out.println("getApproval");

        if(!userService.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C04", HttpStatus.BAD_REQUEST);
        
        try {
            return new ResponseEntity<>(getInfoLobby.getScenesUser(sceneService, dto.getId()), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>("C03", HttpStatus.BAD_REQUEST);
        }
        
    }
}
