package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridbutton.Style;

import java.io.Serializable;

public class GridButton implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private Style style;

	public Style getStyle()
	{
		return this.style;
	}

	public void setStyle(Style style)
	{
		this.style = style;
	}
}
