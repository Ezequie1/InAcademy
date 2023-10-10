package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;
import java.util.Set;

@Data
@Entity
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name="email", unique= true)
    private String email;
    private String password;
    @Lob
    private byte[] userImage;
    private int userPoints;
    private String function;
    private LocalTime lastSignin;
    @OneToMany(mappedBy = "user")
    private Set<RegistrationModel> registrations;
}
