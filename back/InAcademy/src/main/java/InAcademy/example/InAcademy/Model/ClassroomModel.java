package InAcademy.example.InAcademy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ClassroomModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private StatusModel statusClassroom;
    private int sequenceClassroom;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_module")
    private CourseModule module;
    private String titleClassroom;
    private String urlVideo;
    private String urlTemplateClassrom;

    public ClassroomModel(StatusModel statusClassroom, CourseModule module, String titleClassroom, String urlVideo, String urlTemplateClassrom) {
        this.statusClassroom = statusClassroom;
        this.module = module;
        this.titleClassroom = titleClassroom;
        this.urlVideo = urlVideo;
        this.urlTemplateClassrom = urlTemplateClassrom;
    }
}
