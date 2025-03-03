package application.core.app.services;

import application.core.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
