package click.myclick.controller.scene;

import click.myclick.service.dao.game.SaveGameService;

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
public class SaveSaveGameController {
    
    private final SaveGameService saveGameService;

    @Autowired
    public SaveSaveGameController(final SaveGameService saveGameService) {
        this.saveGameService = saveGameService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final String idScene, Authentication auth) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
