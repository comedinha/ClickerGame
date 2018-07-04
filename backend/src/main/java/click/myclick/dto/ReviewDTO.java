package click.myclick.dto;

import java.io.Serializable;

public class ReviewDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private double score;
    private String review;
    private String scene;

	public double getScore()
	{
		return this.score;
	}

	public void setScore(double score)
	{
		this.score = score;
	}

	public String getReview()
	{
		return this.review;
	}

	public void setReview(String review)
	{
		this.review = review;
	}

	public String getScene()
	{
		return this.scene;
	}

	public void setScene(String scene)
	{
		this.scene = scene;
	}
}
