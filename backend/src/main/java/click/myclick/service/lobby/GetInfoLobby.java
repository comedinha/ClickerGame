package click.myclick.service.lobby;

import click.myclick.service.lobby.NewsUtility;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.service.dao.scene.SceneService;
import click.myclick.service.dao.report.ReportService;
import click.myclick.dto.lobby.InfoLobbyDTO;
import click.myclick.dto.lobby.GetUserDTO;
import click.myclick.dto.lobby.scene.SceneDTO;
import click.myclick.model.User;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class GetInfoLobby {
    
    public InfoLobbyDTO getInfoLobby(UserService userService, NewsService newsService, SceneService sceneService, ReportService reportService, String username) {

        InfoLobbyDTO dto = new InfoLobbyDTO();
        NewsUtility news = new NewsUtility();
        GetScenes getScenes = new GetScenes();

        User user = userService.findByUsername(username);

        dto.setAuthorities(user.getAuthorities().get(0).getAuthority());
        dto.setName(user.getName());
        dto.setNews(news.checkNews(newsService, user.getLastchecknews()));
        dto.setNumApproval(getScenes.getApproval(sceneService).size());
        dto.setNumReport(getScenes.getReport(sceneService, reportService).size());
        
        dto.setMyScenes(getScenes.getMyScenes(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));
        dto.setPlayedGames(getScenes.getPlayedGames(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));
        dto.setMostPlayed(getScenes.getMostPlayed(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));
        dto.setBestRated(getScenes.getBestRated(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));

        return dto;
    }

    public ArrayList<GetUserDTO> getAllUsers(UserService service) {
        
        List<User> allUsers = service.findAll();
        ArrayList<GetUserDTO> users = new ArrayList<GetUserDTO>();

        for(User user : allUsers) {
            users.add(new GetUserDTO(user.getId(), user.getName(), user.getUsername(), 
                                     user.getAuthorities().get(0).getAuthority(), user.isEnabled()));
        }

        return users;
    }

    public ArrayList<SceneDTO> getApproval(SceneService service) {
        
        GetScenes getScenes = new GetScenes();

        return getScenes.getApproval(service);
    }

    public ArrayList<SceneDTO> getReport(SceneService sService, ReportService rService) {
        GetScenes getScenes = new GetScenes();

        return getScenes.getReport(sService, rService);
    }

    public ArrayList<SceneDTO> getAllScenes(SceneService sService, String idUser, boolean isAdmin) {
        GetScenes getScenes = new GetScenes();

        return getScenes.getAllGames(sService, idUser, isAdmin);
    }

    public ArrayList<SceneDTO> getScenesUser(SceneService service, String id) {
        GetScenes getScenes = new GetScenes();

        return getScenes.getScenesUser(service, id);
    }
}
