package application.core.app.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserRequestDTO {

    @NotBlank(message = "Name can not be blank")
    private String name;

    @NotBlank(message = "Login can not be blank")
    private String login;

    @NotBlank(message = "Password can not be blank")
    private String password;

    @NotBlank(message = "Status can not be blank")
    private String status;

    @NotBlank(message = "Access level can not be blank")
    private String accessLevel;
}
