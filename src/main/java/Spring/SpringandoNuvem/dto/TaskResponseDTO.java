package Spring.SpringandoNuvem.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class TaskResponseDTO {
    private Long id;
    private String titulo;
    private String descricao;
    private String status;
}
