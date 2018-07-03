package click.myclick.controller.scene;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.scene.LoadScene;

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
public class SaveSaveController {
    
    private final SceneService sceneService;
    private final LoadScene loadScene;

    @Autowired
    public SaveSaveController(final SceneService sceneService, final LoadScene loadScene) {
        this.sceneService = sceneService;
        this.loadScene = loadScene;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final String idScene, Authentication auth) {

        return new ResponseEntity<>(loadScene.getScene(sceneService, idScene), HttpStatus.OK);
    }
}
