package click.myclick.dto.scene.lists.world.layout.grid.backgroundColor;

import java.io.Serializable;

public class Rgba implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private double a;
    private double b;
    private double g;
    private double r;

	public double getA()
	{
		return this.a;
	}

	public void setA(double a)
	{
		this.a = a;
	}

	public double getB()
	{
		return this.b;
	}

	public void setB(double b)
	{
		this.b = b;
	}

	public double getG()
	{
		return this.g;
	}

	public void setG(double g)
	{
		this.g = g;
	}

	public double getR()
	{
		return this.r;
	}

	public void setR(double r)
	{
		this.r = r;
	}
}
