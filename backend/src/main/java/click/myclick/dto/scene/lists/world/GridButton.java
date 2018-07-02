package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridbutton.Style;

import java.io.Serializable;

public class GridButton implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String ref;
    private Style style;

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public Style getStyle()
	{
		return this.style;
	}

	public void setStyle(Style style)
	{
		this.style = style;
	}

}
