package click.myclick.dto;

import java.io.Serializable;


public class PasswordResetDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String username;
    private String token;
    private String password;
    private String confirmPassword;

    public PasswordResetDTO() {
    }

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return this.confirmPassword;
	}

	public void setConfirmpassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}    
}
