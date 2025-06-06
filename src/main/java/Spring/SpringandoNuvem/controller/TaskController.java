package Spring.SpringandoNuvem.controller;

import Spring.SpringandoNuvem.dto.TaskDTO;
import Spring.SpringandoNuvem.dto.TaskResponseDTO;
import Spring.SpringandoNuvem.model.Task;
import Spring.SpringandoNuvem.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;


    @PostMapping
    public ResponseEntity<Task> criar(@RequestBody TaskDTO dto){
        Task taskSalva = taskService.salvarTask(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskSalva);
    }

    @GetMapping
    public ResponseEntity<List<TaskResponseDTO>> listarTodos(){
        return ResponseEntity.ok(taskService.listarTodos());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> deletar(@PathVariable Long id) {
        TaskResponseDTO dto = taskService.deletar(id);
        return ResponseEntity.ok(dto);
    }


    @PutMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> atualizar(@PathVariable Long id, @RequestBody TaskDTO dto) {
        TaskResponseDTO taskAtualizada = taskService.atualizar(id, dto);
        return ResponseEntity.ok(taskAtualizada);
    }


}

