package click.myclick.model;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;


public class User extends BaseEntity implements UserDetails {

    private static final long serialVersionUID = 7954325925563724664L;

    private List<Authority> authorities;

    private String username;
    private String password;
    private String name;
    private String tokenEmail;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean isEnabled;
    private String lastCheckNews;

    @Override
    public List<Authority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

    public String getName() {
        return name;
    }

    public void setAuthorities(final List<Authority> authorities) {
        this.authorities = authorities;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public void setAccountNonExpired(final boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(final boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public void setCredentialsNonExpired(final boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public void setEnabled(final boolean enabled) {
        isEnabled = enabled;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public void setTokenEmail(String tokenEmail) {
        this.tokenEmail = tokenEmail;
    }

    public String getTokenEmail() {
        return tokenEmail;
    }

    public String getLastchecknews() {
		return this.lastCheckNews;
	}

	public void setLastchecknews(String lastCheckNews) {
		this.lastCheckNews = lastCheckNews;
	}

}
