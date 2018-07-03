package click.myclick.dto.scene.lists.world.layout.grid.backgroundColor;

import java.io.Serializable;

public class Hsv implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private double a;
    private double h;
    private double s;
    private double v;

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
