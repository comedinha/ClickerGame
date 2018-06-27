package click.myclick.dto.auth;

import java.io.Serializable;


public class LoginDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String username;
    private String password;
    private String captcharesponse;

    public LoginDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public String getCaptcharesponse() {
        return captcharesponse;
    }

    public void setCaptcharesponse(final String captcharesponse) {
        this.captcharesponse = captcharesponse;
    }
}
