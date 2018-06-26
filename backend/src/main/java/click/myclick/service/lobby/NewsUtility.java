package click.myclick.service.lobby;

import click.myclick.service.dao.news.NewsService;
import click.myclick.dto.AddNewsDTO;
import click.myclick.model.News;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

        List<News> newsList = newsService.findAll();
        List<News> noSeen = new ArrayList<News>();

        for(News news : newsList)
            if(news.getCreatedAt().compareTo(lastCheckNews) > 0)
                noSeen.add(news);

        return noSeen.size();
    }
}