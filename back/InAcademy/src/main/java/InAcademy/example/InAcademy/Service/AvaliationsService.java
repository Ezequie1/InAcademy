package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.AvaliationsModel;
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

    public List<AvaliationsModel> getAvaliations() {
        return  repository.findAll();
    }

    public AvaliationsModel createAvaliation(AvaliationsDTO avaliation) {

        UserModel user = userRepository.findByEmail(avaliation.email());

        return new AvaliationsModel(
                user.getName(),
                user.getEmail(),
                avaliation.titleComment(),
                avaliation.comment(),
                courseRepository.findById(avaliation.courseId()).orElseThrow(),
                LocalDateTime.now(),
                avaliation.avaliation());
    }
}
