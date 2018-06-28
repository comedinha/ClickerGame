package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Document
public class Report extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;

	private String idUser;
	private String idScene;
	private String text;
	private int numberReports;

	public Report() {
	}

	public String getIdUser()
	{
		return this.idUser;
	}

	public void setIdUser(String idUser)
	{
		this.idUser = idUser;
	}

	public String getIdScene()
	{
		return this.idScene;
	}

	public void setIdScene(String idScene)
	{
		this.idScene = idScene;
	}

	public String getText()
	{
		return this.text;
	}

	public void setText(String text)
	{
		this.text = text;
	}

	public int getNumberReports()
	{
		return this.numberReports;
	}

	public void setNumberReports(int numberReports)
	{
		this.numberReports = numberReports;
	}
}
