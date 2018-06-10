package click.myclick.dto;

import java.io.Serializable;


public class CodeDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String code;

    public CodeDTO() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(final String code) {
        this.code = code;
    }

}
