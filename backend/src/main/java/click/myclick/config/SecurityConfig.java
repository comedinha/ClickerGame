package click.myclick.config;

import click.myclick.security.filter.AuthenticationTokenFilter;
import click.myclick.security.service.TokenAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final TokenAuthenticationService tokenAuthenticationService;

    @Autowired
    protected SecurityConfig(final TokenAuthenticationService tokenAuthenticationService) {
        super();
        this.tokenAuthenticationService = tokenAuthenticationService;
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http.cors()
        .and()
            .authorizeRequests()
                .antMatchers("/api/auth").permitAll()
                .antMatchers("/api/signup").permitAll()
                .antMatchers("/api/authEmail").permitAll()
                .antMatchers("/api/authPasswordRecovery").permitAll()
                .antMatchers("api/authPasswordReset").permitAll()
                .anyRequest().authenticated()
        .and()
            .addFilterBefore(new AuthenticationTokenFilter(tokenAuthenticationService),
                        UsernamePasswordAuthenticationFilter.class)
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
            .csrf().disable();
    }

}
