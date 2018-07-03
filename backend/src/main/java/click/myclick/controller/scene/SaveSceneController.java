package click.myclick.controller.scene;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.user.UserService;
import click.myclick.model.Scene;
import click.myclick.converter.ConverterFacade;
import click.myclick.dto.scene.SceneDTO;

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
    private final ConverterFacade converterFacade;

    @Autowired
    public SaveSceneController(final SceneService sceneService, final UserService userService, final ConverterFacade converterFacade) {
        this.sceneService = sceneService;
        this.userService = userService;
        this.converterFacade = converterFacade;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody final SceneDTO dto, Authentication auth) {

        if(dto.getId().length() > 8) {
            System.out.println("Saving...");
            Scene scene = sceneService.find(dto.getId());
            sceneService.getRepository().save(converterFacade.convertSave(dto, scene));
            return new ResponseEntity<>(dto.getId(), HttpStatus.OK);
        } else {
            dto.setIdCreator(userService.findByUsername(auth.getPrincipal().toString()).getId());            
            try {
                System.out.println("Saving...");
                return new ResponseEntity<>(sceneService.create(converterFacade.convert(dto)).getId(), HttpStatus.OK);
            } catch(Exception e) {
                System.out.println("Error Save Scene");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
    }
}
