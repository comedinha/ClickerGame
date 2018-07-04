package click.myclick.controller.scene;

import click.myclick.service.dao.game.SaveGameService;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.game.SaveLoad;

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
@RequestMapping("/api/loadSaveGame")
public class LoadSaveGameController {
    
    private final SaveGameService saveGameService;
    private final SaveLoad saveLoad;
    private final UserService uService;
    private final SceneService sScene;

    @Autowired
    public LoadSaveGameController(final SaveGameService saveGameService, final SaveLoad saveLoad, final UserService uService, final SceneService sScene) {
        this.saveGameService = saveGameService;
        this.saveLoad = saveLoad;
        this.uService = uService;
        this.sScene = sScene;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final String id, Authentication auth) {

        System.out.println(id);

        return new ResponseEntity<>(saveLoad.load(saveGameService, sScene, id, uService.findByUsername(auth.getPrincipal().toString()).getId()), HttpStatus.OK);
    }
}
