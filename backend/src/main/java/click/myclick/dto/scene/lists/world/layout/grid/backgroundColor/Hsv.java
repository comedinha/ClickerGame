package click.myclick.dto.scene.lists.world.layout.grid.backgroundColor;

import java.io.Serializable;

public class Hsv implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private int a;
    private int h;
    private double s;
    private double v;

	public int getA()
	{
		return this.a;
	}

	public void setA(int a)
	{
		this.a = a;
	}

	public int getH()
	{
		return this.h;
	}

	public void setH(int h)
	{
		this.h = h;
	}

	public double getS()
	{
		return this.s;
	}

	public void setS(double s)
	{
		this.s = s;
	}

	public double getV()
	{
		return this.v;
	}

	public void setV(double v)
	{
		this.v = v;
	}
}
