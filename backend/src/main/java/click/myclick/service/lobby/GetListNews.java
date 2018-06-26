package click.myclick.service.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.service.dao.news.NewsService;
import click.myclick.dto.GetNewsDTO;
import click.myclick.model.User;
import click.myclick.model.News;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;

@Service
public class GetListNews {
    
    public List<GetNewsDTO> getListNews(UserService userService, NewsService newsService, String username) {
        User user = userService.findByUsername(username);
        List<News> newsList = newsService.findAll();
        List<GetNewsDTO> noSeen = new ArrayList<GetNewsDTO>();

        for(int i = newsList.size(); noSeen.size() < 5; i--) {
            noSeen.add(new GetNewsDTO(newsList.get(i-1).getTitle(), newsList.get(i-1).getContent()));
        }

        user.setLastchecknews(String.valueOf(LocalDateTime.now()));
        userService.getRepository().save(user);

        return noSeen;
    }
}
