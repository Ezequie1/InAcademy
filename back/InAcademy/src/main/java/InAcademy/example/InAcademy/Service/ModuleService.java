package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.CourseModule;
import InAcademy.example.InAcademy.Model.DTO.ModuleDTO;
import InAcademy.example.InAcademy.Model.StatusModel;
import InAcademy.example.InAcademy.Repositories.CourseModuleRepository;
import InAcademy.example.InAcademy.Repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;

@Service
public class ModuleService {

    @Autowired
    private CourseModuleRepository repository;

    @Autowired
    private CourseRepository courseRepository;
    public List<CourseModule> getAllModules() {
        return repository.findAll();
    }

    public CourseModule createModule(ModuleDTO module) {
        CourseModel course = courseRepository.findById(module.idCourse()).get();
        CourseModule newModule = new CourseModule(
                module.nameModule(),
                module.descriptionModule(),
                course,
                StatusModel.NOT_STARTED
        );

        course.getCourseContent().add(newModule);

        courseRepository.save(course);
        return repository.save(newModule);
    }

    public List<CourseModule> getModulesByCourse(Long id) {

        return repository.findByCourse(courseRepository.findById(id).get());
    }
}
