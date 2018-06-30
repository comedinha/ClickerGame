package click.myclick.controller.lobby.get;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.report.ReportService;
import click.myclick.service.dao.user.UserService;
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
@RequestMapping("/api/getreport")
public class GetReportController {

    private final SceneService sceneService;
    private final ReportService reportService;
    private final GetInfoLobby getInfoLobby;
    private final UserService uService;

    @Autowired
    public GetReportController(SceneService sceneService, ReportService reportService, GetInfoLobby getInfoLobby, UserService uService) {
        this.sceneService = sceneService;
        this.reportService = reportService;
        this.getInfoLobby = getInfoLobby;
        this.uService = uService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getInfo(Authentication auth) {
        System.out.println("getReport");

        if(!uService.find(auth.getPrincipal().toString()).getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))
            return new ResponseEntity<>("C04", HttpStatus.BAD_REQUEST);
        
        return new ResponseEntity<>(getInfoLobby.getReport(sceneService, reportService), HttpStatus.OK);
    }
}
