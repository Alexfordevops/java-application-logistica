package application.core.app.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ProductResponseDTO {

    private Long id;

    private String name;

    private String category;

    private Integer quantity = 0;

    private double price = 0;

    private LocalDateTime CreationDate;
}
