package click.myclick.dto.lobby.scene;

import java.io.Serializable;


public class PlayedSceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String creator;
    private boolean approved;
    private String smallDescription;
    private String description;
    private int totalPlayed;
    private int totalComplete;
    private String image;
    
    public PlayedSceneDTO() {
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

	public String getSmallDescription()
	{
		return this.smallDescription;
	}

	public void setSmallDescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public int getTotalPlayed()
	{
		return this.totalPlayed;
	}

	public void setTotalPlayed(int totalPlayed)
	{
		this.totalPlayed = totalPlayed;
	}

	public int getTotalComplete()
	{
		return this.totalComplete;
	}

	public void setTotalComplete(int totalComplete)
	{
		this.totalComplete = totalComplete;
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