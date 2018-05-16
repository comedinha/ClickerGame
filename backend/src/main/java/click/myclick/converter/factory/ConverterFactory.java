package click.myclick.converter.factory;

import click.myclick.converter.dto.UserDTOConverter;
import click.myclick.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;


@Component
public class ConverterFactory {

    private Map<Object, Converter> converters;

    public ConverterFactory() {

    }

    @PostConstruct
    public void init() {
        converters = new HashMap<>();
        converters.put(UserDTO.class, new UserDTOConverter());
    }

    public Converter getConverter(final Object type) {
        return converters.get(type);
    }
}
