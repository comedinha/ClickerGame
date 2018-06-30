package click.myclick.dto.lobby;

import java.io.Serializable;


public class AdminUserUpdateDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String id;
    private String name;
    private String email;
    private String password;
    private String ConfirmPassword;
    private String role;
    private boolean enabled;

    public AdminUserUpdateDTO() {
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
    }
    
    public String getEmail()
	{
		return this.email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return this.ConfirmPassword;
	}

	public void setConfirmPassword(String ConfirmPassword) {
		this.ConfirmPassword = ConfirmPassword;
    }
    
    public String getRole()
	{
		return this.role;
	}

	public void setRole(String role)
	{
		this.role = role;
    }
    
    public boolean getEnabled()
	{
		return this.enabled;
	}

	public void setEnabled(boolean enable)
	{
		this.enabled = enable;
	}
}
