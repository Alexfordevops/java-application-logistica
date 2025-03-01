package application.core.app.services;

import application.core.app.models.User;
import application.core.app.repository.UserRepository;
import application.core.app.dtos.UserRequestDTO;
import application.core.app.dtos.UserResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    //Link com o repositório User
    @Autowired
    private UserRepository userRepository;

    //[GET] Listar todos os usuários
    public List<UserResponseDTO> getAllUsers(){
        return userRepository.findAll()
                .stream()
                .map(user -> new UserResponseDTO(
                        user.getId(),
                        user.getName(),
                        user.getLogin(),
                        user.getStatus(),
                        user.getAccessLevel()))
                .collect(Collectors.toList());
    }

    //[GET] Listar usuário por id
    public UserResponseDTO getUserById(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getLogin(),
                user.getStatus(),
                user.getAccessLevel()
        );
    }

    //[POST] Criar usuário
    public ResponseEntity<UserResponseDTO> createUser(UserRequestDTO userDTO){
        User user = new User();
        user.setName(userDTO.getName());
        user.setLogin(userDTO.getLogin());
        user.setStatus(userDTO.getStatus());
        user.setPassword(userDTO.getPassword());
        user.setAccessLevel(userDTO.getAccessLevel());
        User savedUser = userRepository.save(user);
        UserResponseDTO responseDTO = new UserResponseDTO(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getLogin(),
                savedUser.getStatus(),
                savedUser.getAccessLevel()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
    }

    //[UPDATE] Atualizar usuário por id !!Só funciona com postman, atualizar para ng form!!
    public ResponseEntity<UserResponseDTO> updateUser(Long id, UserRequestDTO userDTO){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDTO.getName());
        user.setLogin(userDTO.getLogin());
        user.setStatus(userDTO.getStatus());
        user.setPassword(userDTO.getPassword());
        user.setAccessLevel(userDTO.getAccessLevel());
        User updatedUser = userRepository.save(user);
        UserResponseDTO responseDTO = new UserResponseDTO(
                updatedUser.getId(),
                updatedUser.getName(),
                updatedUser.getLogin(),
                updatedUser.getStatus(),
                updatedUser.getAccessLevel()
        );
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    //[DELETE] Deletar usuário por id
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}