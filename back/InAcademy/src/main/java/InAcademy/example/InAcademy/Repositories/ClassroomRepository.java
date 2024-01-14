package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.ClassroomModel;
import InAcademy.example.InAcademy.Model.CourseModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassroomRepository extends JpaRepository<ClassroomModel, Long> {
    List<ClassroomModel> findByModule(CourseModule courseModule);
}
