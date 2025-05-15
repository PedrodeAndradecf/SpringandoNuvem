package Spring.SpringandoNuvem.service;


import Spring.SpringandoNuvem.dto.TaskDTO;
import Spring.SpringandoNuvem.dto.TaskResponseDTO;
import Spring.SpringandoNuvem.model.Task;
import Spring.SpringandoNuvem.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskrepository;


    public Task salvarTask(TaskDTO dto){
        Task task = new Task();
        task.setTitulo(dto.getTitulo());
        task.setDescricao(dto.getDescricao());
        task.setStatus(dto.getStatus());

        return taskrepository.save(task);
    }

    public List<TaskResponseDTO> listarTodos(){
        return taskrepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());

    }





    private TaskResponseDTO toDTO(Task task){
        TaskResponseDTO dto = new TaskResponseDTO();
        dto.setId(task.getId());
        dto.setTitulo(task.getTitulo());
        dto.setDescricao(task.getDescricao());
        dto.setStatus(task.getStatus());
        return dto;
    }



    public TaskResponseDTO deletar(Long id) {
        Task task = taskrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        taskrepository.deleteById(id);
        return toDTO(task);
    }





    public TaskResponseDTO atualizar(Long id, TaskDTO dto) {
        Task task = taskrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        task.setTitulo(dto.getTitulo());
        task.setDescricao(dto.getDescricao());
        task.setStatus(dto.getStatus());

        taskrepository.save(task);
        return toDTO(task); //
    }







}
