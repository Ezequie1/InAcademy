package InAcademy.example.InAcademy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Transactional
public class CourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String authorName;
    private String urlImageCourse;
    private String courseDescription;
    private LocalDateTime creationDate;
    @Min(0)
    @Max(5)
    private Double avaliation;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledCourses")
    private Set<UserModel> users = new HashSet<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "favoritesCourses")
    private Set<UserModel> favoritesCoursesUser = new HashSet<>();

    @OneToMany
    @JoinColumn(name="course")
    private List<AvaliationsModel> courseComments = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<CourseModule> courseContent = new ArrayList<>();

    public CourseModel(String title, String authorName, String urlImageCourse, String courseDescription, LocalDateTime creationDate, Double avaliation) {
        this.title = title;
        this.authorName = authorName;
        this.urlImageCourse = urlImageCourse;
        this.courseDescription = courseDescription;
        this.creationDate = creationDate;
        this.avaliation = avaliation;
    }
}
