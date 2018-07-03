package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridbutton.*;

import java.io.Serializable;

public class GridButton implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private int clickValue;
	private Coin coin;
	private String ref;
	private Style style;

	public GridButton() {
		this.coin = null;
		this.ref = null;
		this.style = null;
	}

	public int getClickValue()
	{
		return this.clickValue;
	}

	public void setClickValue(int clickValue)
	{
		this.clickValue = clickValue;
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

	
}
