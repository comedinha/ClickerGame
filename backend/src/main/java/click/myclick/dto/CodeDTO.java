package click.myclick.dto;

import java.io.Serializable;


public class CodeDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String username;
    private String token;

    public CodeDTO() {
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setToken(final String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

}
