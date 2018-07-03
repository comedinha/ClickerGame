package click.myclick.dto.scene.lists.world.layout.grid;

import click.myclick.dto.scene.lists.world.layout.grid.backgroundColor.*;

import java.io.Serializable;

public class BackgroundColor implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;
    
    private int a;
    private String hex;
    private Hsl hsl;
    private Hsv hsv;
    private int oldHue;
    private Rgba rgba;
	private String source;
	
	public BackgroundColor() {
		this.hsl = null;
		this.hsv = null;
		this.rgba = null;
	}

	public int getA()
	{
		return this.a;
	}

	public void setA(int a)
	{
		this.a = a;
	}

	public String getHex()
	{
		return this.hex;
	}

	public void setHex(String hex)
	{
		this.hex = hex;
	}

	public Hsl getHsl()
	{
		return this.hsl;
	}

	public void setHsl(Hsl hsl)
	{
		this.hsl = hsl;
	}

	public Hsv getHsv()
	{
		return this.hsv;
	}

	public void setHsv(Hsv hsv)
	{
		this.hsv = hsv;
	}

	public int getOldhue()
	{
		return this.oldHue;
	}

	public void setOldhue(int oldHue)
	{
		this.oldHue = oldHue;
	}

	public Rgba getRgba()
	{
		return this.rgba;
	}

	public void setRgba(Rgba rgba)
	{
		this.rgba = rgba;
	}

	public String getSource()
	{
		return this.source;
	}

	public void setSource(String source)
	{
		this.source = source;
	}
}
