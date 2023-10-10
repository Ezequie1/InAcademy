package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.ClassroomModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassroomRepository extends JpaRepository<ClassroomModel, Long> {
}
