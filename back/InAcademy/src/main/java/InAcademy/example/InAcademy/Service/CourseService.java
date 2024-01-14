package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.DTO.CourseDTO;
import InAcademy.example.InAcademy.Model.UserModel;
import InAcademy.example.InAcademy.Repositories.CourseRepository;
import InAcademy.example.InAcademy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repository;

    @Autowired
    private UserRepository userRepository;

    public List<CourseModel> getAllCourses() {
        return repository.findAll();
    }

    public CourseModel createCourse(CourseDTO course) {

        return repository.save(new CourseModel(
                course.title(),
                course.author(),
                course.urlCapa(),
                course.description(),
                LocalDateTime.now(),
                0.0)
        );
    }

    public List<CourseModel> getCoursesBySearch(String search) {
        return repository.findByTitleContaining(search);
    }

    public UserModel registerUserToCourse(String email, long courseId) {
        UserModel user = userRepository.findByEmail(email);
        CourseModel course = repository.findById(courseId).get();

        user.getEnrolledCourses().add(course);

        return userRepository.save(user);
    }

    public String addCourseToFavorite(String email, long courseId) {
        UserModel user = userRepository.findByEmail(email);
        CourseModel course = repository.findById(courseId).get();

        user.getFavoritesCourses().add(course);

        userRepository.save(user);
        return "ADDED";
    }

    public CourseModel getCourseById(Long id) {
        return repository.findById(id).get();
    }

    public String getTotalUsersInCourse(Long id) {
        CourseModel course = repository.findById(id).get();

        return Integer.toString(course.getUsers().size());

    }

    public String removeCourseToFavorite(String email, long courseId) {
        UserModel user = userRepository.findByEmail(email);
        CourseModel course = repository.findById(courseId).get();

        user.getFavoritesCourses().remove(course);
        userRepository.save(user);
        return "REMOVED";
    }
}
