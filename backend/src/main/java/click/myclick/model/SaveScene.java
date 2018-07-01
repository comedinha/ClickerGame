package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Document
public class SaveScene extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;

    private String json;

	public String getJson() {
		return this.json;
	}

	public void setJson(String json) {
		this.json = json;
	}

}
