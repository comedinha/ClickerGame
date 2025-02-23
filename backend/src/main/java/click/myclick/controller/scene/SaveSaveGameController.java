package click.myclick.controller.scene;

import click.myclick.service.dao.game.SaveGameService;
import click.myclick.dto.scene.SaveDTO;
import click.myclick.service.game.SaveLoad;
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
@RequestMapping("/api/saveSaveGame")
public class SaveSaveGameController {
    
    private final SaveGameService saveGameService;
    private final SaveLoad saveLoad;
    private final UserService uService;

    @Autowired
    public SaveSaveGameController(final SaveGameService saveGameService, final SaveLoad saveLoad, final UserService uService) {
        this.saveGameService = saveGameService;
        this.saveLoad = saveLoad;
        this.uService = uService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final SaveDTO dto, Authentication auth) {

        dto.setIdplayer(uService.findByUsername(auth.getPrincipal().toString()).getId());

        return new ResponseEntity<>(saveLoad.save(saveGameService, dto), HttpStatus.OK);
    }
}
