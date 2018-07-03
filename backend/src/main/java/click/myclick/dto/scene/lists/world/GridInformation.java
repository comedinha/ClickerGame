package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridbutton.Coin;
import click.myclick.dto.scene.lists.world.gridbutton.Style;

import java.io.Serializable;

public class GridInformation implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private Coin coin;
	private String ref;
	private Style style;
	private String text;

	public GridInformation() {
		this.coin = null;
	}

	public Coin getCoin()
	{
		return this.coin;
	}

	public void setCoin(Coin coin)
	{
		this.coin = coin;
	}

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

	public String getText()
	{
		return this.text;
	}

	public void setText(String text)
	{
		this.text = text;
	}

	
}
