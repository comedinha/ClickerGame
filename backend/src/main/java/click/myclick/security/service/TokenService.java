package click.myclick.security.service;


public interface TokenService {

    String getToken(String username, String password);

}
