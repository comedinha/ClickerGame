package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Document
public class News extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;

    private String title;
    private String content;

    public News() {
    }

    public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
    }
    
}
