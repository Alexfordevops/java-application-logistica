package application.core.app.controllers;

import application.core.app.dtos.UserRequestDTO;
import application.core.app.dtos.UserResponseDTO;
import application.core.app.models.User;
import application.core.app.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserResponseDTO> getUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public UserResponseDTO getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }
    @PostMapping("/createUser")
    public ResponseEntity<UserResponseDTO> createuser(@RequestBody UserRequestDTO userDTO){
        return userService.createUser(userDTO);
    }
    @PutMapping("/{id}")
     public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UserRequestDTO userDTO){
        return userService.updateUser(id, userDTO);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
