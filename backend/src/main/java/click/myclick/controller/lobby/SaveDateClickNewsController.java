package click.myclick.controller.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.service.lobby.NewsUtility;
import click.myclick.dto.GetNewsDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/getNews")
public class SaveDateClickNewsController {
    private final UserService userService;
    private final NewsService newsService;
    private final NewsUtility newsUtility;

    @Autowired
    public SaveDateClickNewsController(final UserService userService, NewsService newsService,
                                       final NewsUtility newsUtility) {
        this.userService = userService;
        this.newsService = newsService;
        this.newsUtility = newsUtility;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {

        List<GetNewsDTO> noSeen = newsUtility.getListNews(userService, newsService, auth.getPrincipal().toString());

        return new ResponseEntity<>(noSeen, HttpStatus.OK);
    }
}