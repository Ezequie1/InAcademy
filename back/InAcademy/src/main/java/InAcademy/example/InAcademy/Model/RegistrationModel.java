package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class RegistrationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserModel user;
    @ManyToOne
    @JoinColumn(name = "id_course")
    private CourseModel course;
}
