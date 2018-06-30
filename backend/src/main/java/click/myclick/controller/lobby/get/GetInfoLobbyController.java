package click.myclick.controller.lobby.get;

import click.myclick.dto.lobby.InfoLobbyDTO;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.report.ReportService;
import click.myclick.service.lobby.GetInfoLobby;

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
@RequestMapping("/api/getinfolobby")
public class GetInfoLobbyController {
    private final UserService userService;
    private final NewsService newsService;
    private final SceneService sceneService;
    private final ReportService reportService;
    private final GetInfoLobby getInfoLobby;

    @Autowired
    public GetInfoLobbyController(final UserService userService, final NewsService newsService, final GetInfoLobby getInfoLobby, final SceneService sceneService, ReportService reportService) {
        this.userService = userService;
        this.newsService = newsService;
        this.getInfoLobby = getInfoLobby;
        this.sceneService = sceneService;
        this.reportService = reportService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        InfoLobbyDTO info = getInfoLobby.getInfoLobby(userService, newsService, sceneService, reportService, auth.getPrincipal().toString());
        System.out.println("dto info:");
        System.out.println(info.getName() + " " + info.getNews() + " " + info.getAuthorities());

        return new ResponseEntity<>(info, HttpStatus.OK);
    }
}
