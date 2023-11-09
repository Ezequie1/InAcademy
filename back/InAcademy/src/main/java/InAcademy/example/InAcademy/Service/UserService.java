package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.DTO.RegisterDTO;
import InAcademy.example.InAcademy.Model.UserModel;
import InAcademy.example.InAcademy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;
    public UserModel getUser(String email) {
        return repository.findByEmail(email);
    }

    public void createUser(RegisterDTO user){
        String encryptedPassword = new BCryptPasswordEncoder().encode(user.password());
        repository.save(new UserModel( user.name(),  user.email(),  encryptedPassword,  0,  "Não informado",  LocalDateTime.now()));
    }

    @Override
    public UserModel loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }
}
