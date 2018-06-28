package click.myclick.dto.lobby.scene;

import java.io.Serializable;


public class SceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String id;
    private String name;
    private String creator;
    private String smallDescription;
    private String image;

	public SceneDTO(String id, String name, String creator, String smallDescription, String image) {
		this.id = id;
		this.name = name;
		this.creator = creator;
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

	public String getSmallDescription()
	{
		return this.smallDescription;
	}

	public void setSmallDescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
	}

	public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
	}
}
