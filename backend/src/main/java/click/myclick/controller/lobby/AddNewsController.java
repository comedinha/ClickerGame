package click.myclick.controller.lobby;

import click.myclick.dto.AddNewsDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/addNews")
public class AddNewsController {

    @Autowired
    public AddNewsController() {
    }

    //@RequestMapping(method = RequestMethod.POST)
    //public ResponseEntity<?> emailCheck(@RequestBody final AddNewsDTO dto) {}
}
