package click.myclick.dto.lobby.scene;

import java.io.Serializable;


public class MySceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String id;
    private String name;
    private String creator;
    private boolean approved;
    private String smallDescription;
    private String image;

    public MySceneDTO(String id, String name, String creator, boolean approved, String smallDescription, String image) {
		this.id = id;
		this.name = name;
		this.creator = creator;
		this.approved = approved;
		this.smallDescription = smallDescription;
		this.image = image;
    }

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
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

	public String getCreator()
	{
		return this.creator;
	}

	public void setCreator(String creator)
	{
		this.creator = creator;
	}

	public boolean getApproved()
	{
		return this.approved;
	}

	public void setApproved(boolean approved)
	{
		this.approved = approved;
	}

	public String getSmalldescription()
	{
		return this.smallDescription;
	}

	public void setSmalldescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
	}

	public String getImag()
	{
		return this.image;
	}

	public void setImag(String image)
	{
		this.image = image;
	}    
}
