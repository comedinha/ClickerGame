package click.myclick.converter.factory;

import click.myclick.converter.dto.SceneDTOConverter;
import click.myclick.dto.scene.SceneDTO;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;


@Component
public class ConverterSceneFactory {

    private Map<Object, SceneDTOConverter> converters;

    public ConverterSceneFactory() {
    }

    @PostConstruct
    public void init() {
        converters = new HashMap<>();
        converters.put(SceneDTO.class, new SceneDTOConverter());
    }

	public SceneDTOConverter getConverter(Object type) {
		return converters.get(type);
	}

}
