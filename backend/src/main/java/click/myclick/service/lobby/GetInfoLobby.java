package click.myclick.service.lobby;

import click.myclick.service.lobby.NewsUtility;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.service.dao.scene.SceneService;
import click.myclick.dto.lobby.InfoLobbyDTO;
import click.myclick.model.User;

import org.springframework.stereotype.Service;

@Service
public class GetInfoLobby {
    
    public InfoLobbyDTO getInfo(UserService userService, NewsService newsService, SceneService sceneService,
                                String username) {

        InfoLobbyDTO dto = new InfoLobbyDTO();
        NewsUtility news = new NewsUtility();
        GetScenes getScenes = new GetScenes();

        User user = userService.findByUsername(username);

        dto.setAuthorities(user.getAuthorities().get(0).getAuthority());
        dto.setName(user.getName());
        dto.setNews(news.checkNews(newsService, user.getLastchecknews()));
        
        dto.setMyScenes(getScenes.getMyScenes(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));
        dto.setPlayedGames(getScenes.getPlayedGames(sceneService, user.getId()));
        dto.setMostPlayed(getScenes.getMostPlayed(sceneService, user.getId()));
        dto.setBestRated(getScenes.getBestRated(sceneService, user.getId()));
        dto.setAllGames(getScenes.getAllGames(sceneService, user.getId(), (user.getAuthorities().get(0).getAuthority().equals("ROLE_ADMIN"))));

        return dto;
    }
}
