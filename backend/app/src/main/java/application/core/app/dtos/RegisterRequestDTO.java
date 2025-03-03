package application.core.app.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequestDTO {


    @NotBlank(message = "Login can not be blank")
    private String login;

    @NotBlank(message = "Password can not be blank")
    private String password;

    @NotBlank(message = "Name can not be blank")
    private String name;

}
