package click.myclick.dto.scene.lists.world.layout.grid.backgroundColor;

import java.io.Serializable;

public class Rgba implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private int a;
    private int b;
    private int g;
    private int r;

	public int getA()
	{
		return this.a;
	}

	public void setA(int a)
	{
		this.a = a;
	}

	public int getB()
	{
		return this.b;
	}

	public void setB(int b)
	{
		this.b = b;
	}

	public int getG()
	{
		return this.g;
	}

	public void setG(int g)
	{
		this.g = g;
	}

	public int getR()
	{
		return this.r;
	}

	public void setR(int r)
	{
		this.r = r;
	}
}
