package Spring.SpringandoNuvem.repository;

import Spring.SpringandoNuvem.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
