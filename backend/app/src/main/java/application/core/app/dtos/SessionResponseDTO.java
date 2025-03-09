package application.core.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SessionResponseDTO {
    private String login;
    private String accessLevel;
}
