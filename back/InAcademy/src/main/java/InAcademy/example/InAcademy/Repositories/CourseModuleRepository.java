package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.CourseModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseModuleRepository extends JpaRepository<CourseModule, Long> {
}
