package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Long> {
    List<CourseModel> findByTitleContaining(String search);
}
