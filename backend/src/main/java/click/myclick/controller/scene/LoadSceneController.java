package click.myclick.controller.scene;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.scene.LoadScene;
import click.myclick.service.dao.user.UserService;

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
@RequestMapping("/api/loadScene")
public class LoadSceneController {
    
    private final SceneService sceneService;
    private final LoadScene loadScene;
    private final UserService uService;

    @Autowired
    public LoadSceneController(final SceneService sceneService, final LoadScene loadScene, final UserService uService) {
        this.sceneService = sceneService;
        this.loadScene = loadScene;
        this.uService = uService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final String idScene, Authentication auth) {
        System.out.println(idScene);
        return new ResponseEntity<>(loadScene.getScene(sceneService, idScene, uService.findByUsername(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN")), HttpStatus.OK);
    }
}
