package click.myclick.dto.scene.lists.world.tabs;

import java.io.Serializable;
import java.util.List;

public class Item implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String divRef;
    //private List<Grid> grids;
    private String image;
    private String ref;
    private String title;

	public String getDivref()
	{
		return this.divRef;
	}

	public void setDivref(String divRef)
	{
		this.divRef = divRef;
	}

	/*public List<Grid> getGrids()
	{
		return this.grids;
	}

	public void setGrids(List<Grid> grids)
	{
		this.grids = grids;
	}*/

	public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
	}

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

}
