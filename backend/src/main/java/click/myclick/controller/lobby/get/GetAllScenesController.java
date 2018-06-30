package click.myclick.controller.lobby.get;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.lobby.GetInfoLobby;
import click.myclick.model.User;

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
@RequestMapping("/api/getallscenes")
public class GetAllScenesController {

    private final GetInfoLobby getInfoLobby;
    private final SceneService service;
    private final UserService userService;

    @Autowired
    public GetAllScenesController(GetInfoLobby getInfoLobby, SceneService service, UserService userService) {
        this.getInfoLobby = getInfoLobby;
        this.service = service;
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("GetAllScenes");
        User user = userService.findByUsername(auth.getPrincipal().toString());

        return new ResponseEntity<>(getInfoLobby.getAllScenes(service, user.getId(),
                                    user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN")), HttpStatus.OK);
    }
}
