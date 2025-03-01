package application.core.app.services;

import application.core.app.models.User;
import application.core.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    //Link com o repositório User
    @Autowired
    private UserRepository userRepository;

    //[GET] Listar todos os usuários
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //[GET] Listar usuário por id
    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    //[POST] Criar usuário
    public User createUser(User user){
        return userRepository.save(user);
    }

    //[UPDATE] Atualizar usuário por id !!Só funciona com postman, atualizar para ng form!!
    public User updateUser(Long id, User userDetails){
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setLogin(userDetails.getLogin());
        user.setPassword(userDetails.getPassword());
        user.setStatus(userDetails.getStatus());
        user.setAccessLevel(userDetails.getAccessLevel());
        return userRepository.save(user);
    }

    //[DELETE] Deletar usuário por id
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}