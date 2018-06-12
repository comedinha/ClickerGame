package click.myclick.dto;

import java.io.Serializable;


public class PasswordRecoveryDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String username;

    public PasswordRecoveryDTO() {
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
