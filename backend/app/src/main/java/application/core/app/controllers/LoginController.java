package application.core.app.controllers;

import application.core.app.dtos.RegisterRequestDTO;
import application.core.app.dtos.RegisterResponseDTO;
import application.core.app.requestsBody.LoginRequest;
import application.core.app.services.LoginService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/verifyUserExist")
    public ResponseEntity<Boolean> verifyUserExist(@RequestParam String login) {
        boolean exist = loginService.verifyUserExist(login);
        return ResponseEntity.ok(exist);
    }

    @PostMapping("/verifyPassword")
    public ResponseEntity<Boolean> verifyPassword(@RequestBody LoginRequest request) {
        boolean validPassword = loginService.verifyPassword(request.getLogin(), request.getPassword());
        return ResponseEntity.ok(validPassword);
    }

    @PostMapping("/registerUser")
    public ResponseEntity<RegisterResponseDTO> registerUser(@RequestBody RegisterRequestDTO requestDTO) {
        return loginService.registerUser(requestDTO);
    }

    @GetMapping("/isAdmin/{login}")
    public ResponseEntity<Map<String, Boolean>> isAdmin(@PathVariable String login) {
        return loginService.isAdmin(login);
    }
}