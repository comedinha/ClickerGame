package click.myclick.dto.lobby;

import java.io.Serializable;

public class GetUserDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String id;
    private String name;
    private String email;
    private String role;
    private boolean enabled;

    public GetUserDTO(String id, String name, String email, String role, boolean enabled) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.enabled = enabled;
    }

    public GetUserDTO() {
        
    }

	public String getId()
	{
		return this.id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
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

	public boolean getEnabled()
	{
		return this.enabled;
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
    }
    
}
