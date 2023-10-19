package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalTime;
import java.util.Collection;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class UserModel implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
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

    public UserModel(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public UserModel(String name, String email, String password, int userPoints, String function, LocalTime lastSignin) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userPoints = userPoints;
        this.function = function;
        this.lastSignin = lastSignin;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
