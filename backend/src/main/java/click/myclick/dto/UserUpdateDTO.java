package click.myclick.dto;

import java.io.Serializable;


public class UserUpdateDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String oldPassword;
    private String password;
    private String ConfirmPassword;

    public UserUpdateDTO() {
    }

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOldPassword() {
		return this.oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return this.ConfirmPassword;
	}

	public void setConfirmpassword(String ConfirmPassword) {
		this.ConfirmPassword = ConfirmPassword;
	}
}
