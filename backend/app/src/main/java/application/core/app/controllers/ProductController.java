package application.core.app.controllers;

import application.core.app.dtos.ProductRequestDTO;
import application.core.app.dtos.ProductResponseDTO;
import application.core.app.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public List<ProductResponseDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("/create")
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO productDTO){
        return productService.createProduct(productDTO);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@PathVariable Long id, @RequestBody ProductRequestDTO productDTO){
        return productService.updateProduct(id, productDTO);
    }

    @PutMapping("/update/byName/{name}")
    public ResponseEntity<ProductResponseDTO> updateProductByName(@PathVariable String name, @RequestBody ProductRequestDTO productDTO){
        return productService.updateProductByName(name, productDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteProduct(@PathVariable Long id){
        return productService.deleteProduct(id);
    }
}
