package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class CourseModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameModule;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_course", referencedColumnName = "id")
    private CourseModel course;
    @Enumerated(EnumType.STRING)
    private StatusModel statusModule = StatusModel.NOT_STARTED;
    @OneToMany(mappedBy = "module", cascade = CascadeType.ALL)
    private List<ClassroomModel> classroom;
}
