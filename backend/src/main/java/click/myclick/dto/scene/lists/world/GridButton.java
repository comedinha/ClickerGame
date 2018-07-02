package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridbutton.Style;

import java.io.Serializable;
import java.util.List;

public class GridButton implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private List<Style> style;

	public List<Style> getStyle()
	{
		return this.style;
	}

	public void setStyle(List<Style> style)
	{
		this.style = style;
	}
}
