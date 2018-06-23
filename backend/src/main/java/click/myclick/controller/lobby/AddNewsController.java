package click.myclick.controller.lobby;

import click.myclick.dto.AddNewsDTO;
import click.myclick.service.dao.news.NewsService;
import click.myclick.service.lobby.NewsUtility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/addNews")
public class AddNewsController {

    private final NewsService service;
    private final NewsUtility newsUtility;

    @Autowired
    public AddNewsController(final NewsService service, final NewsUtility newsUtility) {
        this.service = service;
        this.newsUtility = newsUtility;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addNews(@RequestBody final AddNewsDTO dto) {
        System.out.printf("%s\n%s", dto.getTitle(), dto.getContent());
        
        final int code = newsUtility.addNews(service, dto);

        if(code == 0)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>("C01", HttpStatus.BAD_REQUEST);
    }
}
