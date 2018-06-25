package click.myclick.service.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.dto.InfoLobbyDTO;
import click.myclick.model.User;
import click.myclick.model.News;

import org.springframework.stereotype.Service;

@Service
public class GetInfoLobby {
    
    public InfoLobbyDTO getInfo(UserService userService, NewsService newsService, String username) {
        InfoLobbyDTO dto = new InfoLobbyDTO();        

        dto.setAuthorities("ROLE_ADMIN");
        dto.setName("teste");
        dto.setNews(true);
        

        return dto;
    }
}