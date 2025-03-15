package application.core.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChangeUserStatusResponseDTO {

    private String login;
    private String status;
}
