package InAcademy.example.InAcademy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.criteria.Order;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CourseModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameModule;
    private String descriptionModule;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_course", referencedColumnName = "id")
    private CourseModel course;
    @Enumerated(EnumType.STRING)
    private StatusModel statusModule = StatusModel.NOT_STARTED;
    @OneToMany(mappedBy = "module", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("sequenceClassroom")
    private List<ClassroomModel> classroom = new ArrayList<>();

    public CourseModule(String nameModule, String descriptionModule, CourseModel course, StatusModel statusModule) {
        this.nameModule = nameModule;
        this.descriptionModule = descriptionModule;
        this.course = course;
        this.statusModule = statusModule;
    }
}
