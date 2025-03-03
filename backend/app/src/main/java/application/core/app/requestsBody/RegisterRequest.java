package application.core.app.requestsBody;
import lombok.*;

@Data
@AllArgsConstructor
public class RegisterRequest {
    private String login;
    private String password;
    private String name;
}
