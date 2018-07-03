package click.myclick.dto.scene.lists.world.layout.grid.backgroundColor;

import java.io.Serializable;

public class Hsl implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private double a;
    private double h;
    private double l;
    private double s;

	public double getA()
	{
		return this.a;
	}

	public void setA(double a)
	{
		this.a = a;
	}

	public double getH()
	{
		return this.h;
	}

	public void setH(double h)
	{
		this.h = h;
	}

	public double getL()
	{
		return this.l;
	}

	public void setL(double l)
	{
		this.l = l;
	}

	public double getS()
	{
		return this.s;
	}

	public void setS(double s)
	{
		this.s = s;
	}
}
