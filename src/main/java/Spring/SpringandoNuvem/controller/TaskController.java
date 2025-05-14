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



}

