package click.myclick.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import click.myclick.dao.Conectar;

@RestController()
@RequestMapping("/auth")
public class AuthController {

    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/login")
    public String login(HttpServletRequest request) throws Exception {
        LOG.info("GET called on /login resource");
        Conectar.conecta();
        return "";
    }

}