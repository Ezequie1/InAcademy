package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.ClassroomModel;
import InAcademy.example.InAcademy.Model.DTO.ClassroomDTO;
import InAcademy.example.InAcademy.Service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/Classroom")
public class ClassroomController {

    @Autowired
    private ClassroomService service;

    @GetMapping("/GetAll")
    public ResponseEntity<List<ClassroomModel>> getAllClassroom(){
        return ResponseEntity.ok().body(service.getAll());
    }

    @GetMapping("/GetByModule/id")
    public ResponseEntity<List<ClassroomModel>> getClassRoomByModule(@PathVariable Long id){
        return ResponseEntity.ok().body(service.getByModule(id));
    }

    @PostMapping("/Create")
    public ResponseEntity<ClassroomModel> createClassroom(@RequestBody ClassroomDTO classroom){
        return ResponseEntity.status(201).body(service.createModule(classroom));
    }
}
