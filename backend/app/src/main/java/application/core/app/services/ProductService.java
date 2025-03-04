package application.core.app.services;

import application.core.app.dtos.ProductRequestDTO;
import application.core.app.dtos.ProductResponseDTO;
import application.core.app.models.Product;
import application.core.app.models.User;
import application.core.app.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    //[GET]
    public List<ProductResponseDTO> getAllProducts(){
        return productRepository.findAll()
                .stream()
                .map(product -> new ProductResponseDTO(
                        product.getName(),
                        product.getCategory(),
                        product.getQuantity(),
                        product.getPrice(),
                        product.getCreationDate()))
                .collect(Collectors.toList());
    }
    //[POST]
    public ResponseEntity<ProductResponseDTO> createProduct(ProductRequestDTO productDTO){
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setCategory(productDTO.getCategory());
        product.setQuantity(productDTO.getQuantity());
        product.setPrice(productDTO.getPrice());
        Product savedProduct = productRepository.save(product);
        ProductResponseDTO responseDTO = new ProductResponseDTO(
                savedProduct.getName(),
                savedProduct.getCategory(),
                savedProduct.getQuantity(),
                savedProduct.getPrice(),
                savedProduct.getCreationDate()
        );
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);

    }
    //[POST] atualiza produto por id
    public ResponseEntity<ProductResponseDTO> updateProduct(Long id, ProductRequestDTO productDTO){
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        product.setName(productDTO.getName());
        product.setCategory(productDTO.getCategory());
        product.setQuantity(productDTO.getQuantity());
        product.setPrice(productDTO.getPrice());
        Product savedProduct = productRepository.save(product);
        ProductResponseDTO responseDTO = new ProductResponseDTO(
                savedProduct.getName(),
                savedProduct.getCategory(),
                savedProduct.getQuantity(),
                savedProduct.getPrice(),
                savedProduct.getCreationDate()
        );
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }
}
