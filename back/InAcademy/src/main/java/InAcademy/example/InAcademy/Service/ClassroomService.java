package InAcademy.example.InAcademy.Service;

import InAcademy.example.InAcademy.Model.ClassroomModel;
import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.CourseModule;
import InAcademy.example.InAcademy.Model.DTO.ClassroomDTO;
import InAcademy.example.InAcademy.Model.StatusModel;
import InAcademy.example.InAcademy.Repositories.ClassroomRepository;
import InAcademy.example.InAcademy.Repositories.CourseModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomService {

    @Autowired
    private ClassroomRepository repository;

    @Autowired
    private CourseModuleRepository moduleRepository;
    public List<ClassroomModel> getAll() {
        return repository.findAll();
    }

    public List<ClassroomModel> getByModule(Long id) {
        return repository.findByModule(moduleRepository.findById(id).get());
    }

    public ClassroomModel createModule(ClassroomDTO classroom) {
        CourseModule module = moduleRepository.findById(classroom.idModule()).get();
        ClassroomModel newClassroom = new ClassroomModel(
                StatusModel.NOT_STARTED,
                module,
                classroom.titleClassroom(),
                classroom.urlVideoClassroom(),
                classroom.urlTemplateClassroom()
        );

        module.getClassroom().add(newClassroom);

        moduleRepository.save(module);
        return repository.save(newClassroom);
    }
}
