package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.DTO.CourseDTO;
import InAcademy.example.InAcademy.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping("/Cursos")
    public ResponseEntity<List<CourseModel>> getAllCourses(){
        return ResponseEntity.status(200).body(service.getAllCourses());
    }

    @PostMapping("/Cursos/Create")
    public ResponseEntity createCourse(@RequestBody @Valid CourseDTO course){
        return ResponseEntity.status(201).body(service.createCourse(course));
    }

    @GetMapping("/Search/{search}")
    public ResponseEntity<List<CourseModel>> getAllCoursesBySearch(@PathVariable String search){
        return ResponseEntity.status(200).body(service.getCoursesBySearch(search));
    }

    @PutMapping("/Cursos/Register/{email}/{courseId}")
    public ResponseEntity registerUserToCourse(@PathVariable String email, @PathVariable long courseId){
        return ResponseEntity.status(200).body(service.registerUserToCourse(email, courseId));
    }
}
