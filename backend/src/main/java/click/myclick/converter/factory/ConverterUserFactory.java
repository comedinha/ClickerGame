package click.myclick.converter.factory;

import click.myclick.converter.dto.UserDTOConverter;
import click.myclick.dto.auth.UserDTO;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;


@Component
public class ConverterUserFactory {

    private Map<Object, UserDTOConverter> converters;

    public ConverterUserFactory() {
    }

    @PostConstruct
    public void init() {
        converters = new HashMap<>();
        converters.put(UserDTO.class, new UserDTOConverter());
    }

	public UserDTOConverter getConverter(Object type) {
		return converters.get(type);
	}

}
