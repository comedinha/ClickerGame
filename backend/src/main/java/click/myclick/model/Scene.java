package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Document
public class Scene extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;

    private String name;
	private String idCreator;
    private boolean approved;
    private String smallDescription;
    private String completeDescription;
	private int totalPlayed;
	private int totalComplete;
    private double rating;
    private String image;

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getIdCreator()
	{
		return this.idCreator;
	}

	public void setIdCreator(String creator)
	{
		this.idCreator = creator;
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

	public String getCompleteDescription()
	{
		return this.completeDescription;
	}

	public void setCompleteDescription(String completeDescription)
	{
		this.completeDescription = completeDescription;
	}

	public int getTotalplayed()
	{
		return this.totalPlayed;
	}

	public void setTotalplayed(int totalPlayed)
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

	public double getRating()
	{
		return this.rating;
	}

	public void setRating(double rating)
	{
		this.rating = rating;
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
