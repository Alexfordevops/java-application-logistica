package application.core.app.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductRequestDTO {

    @NotBlank(message = "Name can not be blank")
    private String name;

    @NotBlank(message = "Category can not be blank")
    private String category;

    @NotBlank(message = "Quantity can not be blank")
    private Integer quantity;

    @NotBlank(message = "price can not be blank")
    private double price;
}
