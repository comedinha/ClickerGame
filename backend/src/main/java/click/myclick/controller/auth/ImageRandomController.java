package click.myclick.controller.auth;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.model.Scene;

import java.util.Random;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/imageRandom")
public class ImageRandomController {
    private final SceneService sService;

    @Autowired
    public ImageRandomController(final SceneService sService) {        
        this.sService = sService;
    }

    @RequestMapping(method = RequestMethod.POST)
        public ResponseEntity<?> imageRandom() {

        Random rand = new Random();

        List<Scene> scenes = sService.findAll();
        
        return new ResponseEntity<>(scenes.get(rand.nextInt(scenes.size())).getImage(), HttpStatus.OK);
    }
}
