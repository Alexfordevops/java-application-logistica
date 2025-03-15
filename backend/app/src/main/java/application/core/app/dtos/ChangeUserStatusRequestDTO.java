package application.core.app.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChangeUserStatusRequestDTO {

    @NotBlank(message = "Status can not be blank")
    private String status;
}
