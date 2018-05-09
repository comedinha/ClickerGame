package click.myclick.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/message")
    public @ResponseBody String sayHello() throws Exception {
        LOG.info("GET called on /message resource");
        return "OI";
    }

}