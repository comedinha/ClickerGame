package click.myclick.controller.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.service.lobby.SaveDateClickNews;

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
@RequestMapping("/api/saveDateClickNews")
public class SaveDateClickNewsController {
    private final UserService service;
    private final SaveDateClickNews saveDate;

    @Autowired
    public SaveDateClickNewsController(final UserService service, final SaveDateClickNews saveDate) {
        this.service = service;
        this.saveDate = saveDate;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("Controller0");
        
        saveDate.saveDate(service, auth.getPrincipal().toString());
        System.out.println("Controller1");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}