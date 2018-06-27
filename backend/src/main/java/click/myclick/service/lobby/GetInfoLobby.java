package click.myclick.service.lobby;

import click.myclick.service.lobby.NewsUtility;
import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.dto.lobby.InfoLobbyDTO;
import click.myclick.model.User;

import org.springframework.stereotype.Service;

@Service
public class GetInfoLobby {
    
    public InfoLobbyDTO getInfo(UserService userService, NewsService newsService, String username) {
        InfoLobbyDTO dto = new InfoLobbyDTO();
        NewsUtility news = new NewsUtility();

        User user = userService.findByUsername(username);

        dto.setAuthorities(user.getAuthorities().get(0).getAuthority());
        dto.setName(user.getName());
        dto.setNews(news.checkNews(newsService, user.getLastchecknews()));

        return dto;
    }
}
