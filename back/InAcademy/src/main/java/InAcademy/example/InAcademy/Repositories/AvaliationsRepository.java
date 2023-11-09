package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.AvaliationsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvaliationsRepository extends JpaRepository<AvaliationsModel, Long> {
}
