package InAcademy.example.InAcademy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvaliationsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String userName;
    private String userEmail;
    private String commentTitle;
    private String comment;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="id_course")
    private CourseModel course;
    private LocalDateTime dataComentário;
    @Min(0)
    @Max(5)
    private Double avaliation;

    public AvaliationsModel(String userName, String userEmail, String commentTitle, String comment, CourseModel course, LocalDateTime dataComentário, Double avaliation) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.commentTitle = commentTitle;
        this.comment = comment;
        this.course = course;
        this.dataComentário = dataComentário;
        this.avaliation = avaliation;
    }
}
