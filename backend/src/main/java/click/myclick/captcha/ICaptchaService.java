package click.myclick.captcha;

public interface ICaptchaService {
    boolean processResponse(final String response) throws Exception;

    String getReCaptchaSite();

    String getReCaptchaSecret();
}