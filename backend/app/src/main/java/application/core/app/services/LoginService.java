package application.core.app.services;

import application.core.app.dtos.RegisterRequestDTO;
import application.core.app.dtos.RegisterResponseDTO;
import application.core.app.dtos.SessionResponseDTO;
import application.core.app.models.User;
import application.core.app.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    //[GET] Verifica se o usuário existe
    public boolean verifyUserExist(String login) {
        return userRepository.findByLogin(login).isPresent();
    }

    //[POST] Verifica se a senha fornecida confere
    public boolean verifyPassword(String login, String password) {
        return userRepository.findByLogin(login)
                .map(user -> user.getPassword().equals(password)) // Compara a senha armazenada com a digitada
                .orElse(false); // Retorna falso se o usuário não existir
    }

    //[POST] Registrar usuário
    public ResponseEntity<RegisterResponseDTO> registerUser(RegisterRequestDTO userDTO){
        User user = new User();
        user.setLogin(userDTO.getLogin());
        user.setPassword(userDTO.getPassword());
        user.setName(userDTO.getName());
        User savedUser = userRepository.save(user);
        RegisterResponseDTO responseDTO = new RegisterResponseDTO(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getLogin(),
                savedUser.getStatus(),
                savedUser.getAccessLevel(),
                savedUser.getCreatedAt()
        );
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    //[GET] Verifica se o admin possui o acessLevel admin através do login
    public ResponseEntity<Map<String, Boolean>> isAdmin(String login){
        return userRepository.findByLogin(login)
                .map(user -> {
                    boolean isAdmin = "Admin".equals(user.getAccessLevel());
                    return ResponseEntity.ok(Map.of("isAdmin", isAdmin));
                })
                .orElse(ResponseEntity.ok(Map.of("isAdmin", false))); // Retorna false se o usuário não for encontrado
    }
}

