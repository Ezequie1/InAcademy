package InAcademy.example.InAcademy.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ClassroomModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private StatusModel statusClassroom;
    private int sequenceClassroom;
    @ManyToOne
    @JoinColumn(name = "id_module")
    private CourseModule module;
    private String titleClassroom;
    private String urlVideo;
    private String contentClassroom;
}
