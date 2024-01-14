package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.AvaliationsModel;
import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.DTO.AvaliationsDTO;
import InAcademy.example.InAcademy.Model.UserModel;
import InAcademy.example.InAcademy.Repositories.AvaliationsRepository;
import InAcademy.example.InAcademy.Repositories.CourseRepository;
import InAcademy.example.InAcademy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AvaliationsService {

    @Autowired
    private AvaliationsRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AvaliationsRepository avaliationsRepository;

    public List<AvaliationsModel> getAvaliations() {
        return  repository.findAll();
    }

    public AvaliationsModel createAvaliation(AvaliationsDTO avaliation) {

        UserModel user = userRepository.findByEmail(avaliation.email());
        CourseModel course = courseRepository.findById(avaliation.courseId()).get();

        AvaliationsModel newAvaliation = new AvaliationsModel(
                user.getName(),
                user.getEmail(),
                avaliation.titleComment(),
                avaliation.comment(),
                courseRepository.findById(avaliation.courseId()).get(),
                LocalDateTime.now(),
                avaliation.avaliation());

        course.getCourseComments().add(newAvaliation);

        courseRepository.save(course);

        addRateToCourse(course);

        return avaliationsRepository.save(newAvaliation);
    }

    private void addRateToCourse(CourseModel course){

        double avaliation = 0;

        for( AvaliationsModel itemAva : course.getCourseComments()){
            avaliation += itemAva.getAvaliation();
        }

        course.setAvaliation(avaliation / course.getCourseComments().size());

        courseRepository.save(course);

    }
}
