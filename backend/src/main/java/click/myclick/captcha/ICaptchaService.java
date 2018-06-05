package click.myclick.captcha;

public interface ICaptchaService {
    void processResponse(final String response) throws Exception;

    String getReCaptchaSite();

    String getReCaptchaSecret();
}