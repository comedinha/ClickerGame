package click.myclick.controller.scene;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.user.UserService;
import click.myclick.dto.scene.saveSceneDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/saveScene")
public class SaveSceneController {
    
    private final SceneService sceneService;
    private final UserService userService;

    @Autowired
    public SaveSceneController(final SceneService sceneService, final UserService userService) {
        this.sceneService = sceneService;
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final saveSceneDTO dto, Authentication auth) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}