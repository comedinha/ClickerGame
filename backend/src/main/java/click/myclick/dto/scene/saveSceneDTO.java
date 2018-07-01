package click.myclick.dto.scene;

import java.io.Serializable;


public class saveSceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String smallDescription;
    private String completeDescription;
    private String image;
    private String json;

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
    
    public String getJson()
	{
		return this.json;
	}

	public void setJson(String json)
	{
		this.json = json;
	}
}
