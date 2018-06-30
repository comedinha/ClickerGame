package click.myclick.dto.lobby;

import java.io.Serializable;


public class DeleteUserDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String id;
    private String name;
    private String email;
    private String role;
    private boolean enable;

    public DeleteUserDTO() {
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
    
    public String getRole()
	{
		return this.role;
	}

	public void setRole(String role)
	{
		this.role = role;
    }
    
    public boolean getEnable()
	{
		return this.enable;
	}

	public void setEnable(boolean enable)
	{
		this.enable = enable;
	}
}
