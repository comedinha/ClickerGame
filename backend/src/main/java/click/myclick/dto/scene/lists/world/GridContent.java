package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.gridcontent.Ref;

import java.io.Serializable;

public class GridContent implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private int h;
	private String i;
	private boolean moved;
	private String ref;
	private String type;
    private int w;
    private int x;
    private int y;

	public int getH()
	{
		return this.h;
	}

	public void setH(int h)
	{
		this.h = h;
	}

	public String getI()
	{
		return this.i;
	}

	public void setI(String i)
	{
		this.i = i;
	}

	public boolean getMoved()
	{
		return this.moved;
	}

	public void setMoved(boolean moved)
	{
		this.moved = moved;
	}

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public String getType()
	{
		return this.type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public int getW()
	{
		return this.w;
	}

	public void setW(int w)
	{
		this.w = w;
	}

	public int getX()
	{
		return this.x;
	}

	public void setX(int x)
	{
		this.x = x;
	}

	public int getY()
	{
		return this.y;
	}

	public void setY(int y)
	{
		this.y = y;
	}

}
