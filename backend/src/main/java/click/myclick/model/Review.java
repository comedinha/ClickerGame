package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;


import java.io.Serializable;

@Document
public class Review extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;

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
