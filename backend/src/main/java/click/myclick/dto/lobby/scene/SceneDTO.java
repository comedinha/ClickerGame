package click.myclick.dto.lobby.scene;

import java.io.Serializable;


public class SceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String creator;
    private String SmallDescription;
    private String image;

    public SceneDTO() {
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
		return this.SmallDescription;
	}

	public void setSmallDescription(String SmallDescription)
	{
		this.SmallDescription = SmallDescription;
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
