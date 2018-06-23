package click.myclick.service.dao.news;
import click.myclick.repository.UserRepository;

import click.myclick.model.User;

import java.util.List;


public interface NewsService {

    User create(User object);

    User find(String id);

    User findByUsername(String userName);

    List<User> findAll();

    User update(String id, User object);

    String delete(String id);
    
    UserRepository getRepository();
    
}
