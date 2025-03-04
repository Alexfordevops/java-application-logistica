package application.core.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class RegisterResponseDTO {
    private Long id;
    private String name;
    private String login;
    private String status;
    private String accessLevel;
    private LocalDateTime createdAt;
}
