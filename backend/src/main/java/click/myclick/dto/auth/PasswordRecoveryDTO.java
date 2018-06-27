package click.myclick.dto.auth;

import java.io.Serializable;


public class PasswordRecoveryDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String email;

    public PasswordRecoveryDTO() {
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}
