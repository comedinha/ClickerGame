package click.myclick.dto.scene;

import java.io.Serializable;

public class SaveSceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String id;
    private String name;
    private String smallDescription;
    private String completeDescription;
    private String image;
    private String worlds;

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
    
    public String getSmallDescription()
	{
		return this.smallDescription;
	}

	public void setSmallDescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
    }
    
    public String getCompleteDescription()
	{
		return this.completeDescription;
	}

	public void setCompleteDescription(String completeDescription)
	{
		this.completeDescription = completeDescription;
    }
    
    public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
    }
    
    public String getWorlds() {
		return this.worlds;
	}

	public void setWorlds(String worlds) {
		this.worlds = worlds;
	}
}
