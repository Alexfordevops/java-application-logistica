package application.core.app.controllers;

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
    public List<User> getUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }
    @PostMapping
    public User createuser(@RequestBody User user){
        return userService.createUser(user);
    }
    @PutMapping("/{id}")
     public User updateUser(@PathVariable Long id, @RequestBody User userDetails){
        return userService.updateUser(id, userDetails);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
