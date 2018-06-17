package click.myclick.dto;

import java.io.Serializable;


public class UserDTO implements Serializable {

    private static final long serialVersionUID = 91901774547107674L;

    private String username;
    private String name;
    private String password;
    private String captcharesponse;

    public UserDTO() {
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

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    } 

    public String getCaptcharesponse() {
		return this.captcharesponse;
	}

	public void setCaptcharesponse(String captcharesponse) {
		this.captcharesponse = captcharesponse;
	}
}
