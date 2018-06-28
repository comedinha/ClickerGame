package click.myclick.dto.lobby.scene;

import java.io.Serializable;


public class SceneBestRatedDTO implements Serializable, Comparable<SceneBestRatedDTO> {

    private static final long serialVersionUID = -4159366809929151486L;

	private String id;
    private String name;
    private String creator;
    private String smallDescription;
	private String image;
	private double rating;
	private boolean canEdit;
	private boolean lastGame;

	public SceneBestRatedDTO(String id, String name, String creator, String smallDescription, String image, double rating) {
		this.id = id;
		this.name = name;
		this.creator = creator;
		this.smallDescription = smallDescription;
		this.image = image;
		this.rating = rating;
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

	public double getRating()
	{
		return this.rating;
	}

	public void setRating(double rating)
	{
		this.rating = rating;
	}

	public boolean getCanEdit() {
		return this.canEdit;
	}

	public void setCanEdit(boolean canEdit) {
		this.canEdit = canEdit;
	};

	public boolean getLastGame() {
		return this.lastGame;
	}

	public void setLastGame(boolean lastGame) {
		this.lastGame = lastGame;
	}

	@Override
	public int compareTo(SceneBestRatedDTO dto) {
		if (this.rating > dto.getRating()) {
			return -1;
		}
		if (this.rating < dto.getRating()) {
			return 1;
		}
		return 0;
	}
}
