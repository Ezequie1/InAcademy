package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.CourseModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseModuleRepository extends JpaRepository<CourseModule, Long> {
    List<CourseModule> findByCourse(CourseModel courseModel);
}
