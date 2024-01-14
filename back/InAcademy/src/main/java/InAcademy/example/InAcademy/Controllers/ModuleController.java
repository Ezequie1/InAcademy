package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.CourseModule;
import InAcademy.example.InAcademy.Model.DTO.ModuleDTO;
import InAcademy.example.InAcademy.Service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

@Controller
public class ModuleController {

    @Autowired
    private ModuleService service;

    @GetMapping("/Modules/AllModules")
    public ResponseEntity<List<CourseModule>> getAllModules(){
        return ResponseEntity.ok().body(service.getAllModules());
    }

    @GetMapping("/Modules/ByCourse/{id}")
    public ResponseEntity<List<CourseModule>> getModulesByCourse(@PathVariable Long id){
        return ResponseEntity.ok().body(service.getModulesByCourse(id));
    }

    @PostMapping("/Modules/Create")
    public ResponseEntity<CourseModule> createModule(@RequestBody @Valid ModuleDTO module){
        return ResponseEntity.status(201).body(service.createModule(module));
    }
}
