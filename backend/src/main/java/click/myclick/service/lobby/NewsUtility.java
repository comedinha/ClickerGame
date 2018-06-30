package click.myclick.service.lobby;

import click.myclick.service.dao.news.NewsService;
import click.myclick.dto.lobby.AddNewsDTO;
import click.myclick.model.News;
import click.myclick.service.dao.user.UserService;
import click.myclick.dto.lobby.GetNewsDTO;
import click.myclick.model.User;

import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDateTime;
import java.util.ArrayList;


@Service
public class NewsUtility {
    public int addNews(NewsService service, AddNewsDTO dto) {
        
        try {
            News news = new News();

            news.setTitle(dto.getTitle());
            news.setContent(dto.getContent());

            service.create(news);
            
            return 0;
        } catch(Exception e) {
            System.out.println(e);
            return 1;
        }
    }

    public int checkNews(NewsService newsService, String lastCheckNews) {

        int count = 0;
        List<News> newsList = newsService.findAll();

        for(News news : newsList)
            if(news.getCreatedAt().compareTo(lastCheckNews) > 0)
                count++;

        return count;
    }

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

    public int deleteNews(NewsService newsService, AddNewsDTO dto) {
        
        List<News> newsList = newsService.findAll();

        for(News news : newsList) {
            if(news.getTitle().equals(dto.getTitle()) && news.getContent().equals(dto.getContent())) {
                newsService.delete(news.getId());
                return 0;
            }
        }

        return 1;
    }
}