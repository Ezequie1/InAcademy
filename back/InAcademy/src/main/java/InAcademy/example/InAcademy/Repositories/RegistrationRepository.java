package InAcademy.example.InAcademy.Repositories;

import InAcademy.example.InAcademy.Model.RegistrationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationModel, Long> {
}
