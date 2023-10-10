package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class CourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String urlImageCourse;
    private String courseDescription;
    @Enumerated(EnumType.STRING)
    private StatusModel statusCourse;
    @OneToMany(mappedBy = "course")
    public Set<RegistrationModel> registrations;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<CourseModule> courseContent = new ArrayList<>();
}
