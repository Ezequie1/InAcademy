package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.CourseModel;
import InAcademy.example.InAcademy.Model.DTO.CourseDTO;
import InAcademy.example.InAcademy.Model.DTO.RegisterUserToCourseDTO;
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

    @GetMapping("/Course/ById/{id}")
    public ResponseEntity<CourseModel> getAllCoursesBySearch(@PathVariable Long id){
        return ResponseEntity.status(200).body(service.getCourseById(id));
    }

    @GetMapping("/Course/ById/{id}/TotalUsers")
    public ResponseEntity<String> getTotalUsersInCourse(@PathVariable Long id){
        return ResponseEntity.status(200).body(service.getTotalUsersInCourse(id));
    }
    @PutMapping("/Cursos/Register")
    public ResponseEntity registerUserToCourse(@RequestBody RegisterUserToCourseDTO info){
        return ResponseEntity.status(200).body(service.registerUserToCourse(info.email(), info.id()));
    }

    @GetMapping("/Cursos/Favorite/{email}/{courseId}")
    public ResponseEntity addCourseToFavorite(@PathVariable String email, @PathVariable long courseId){
        return ResponseEntity.status(200).body(service.addCourseToFavorite(email, courseId));
    }

    @GetMapping("/Cursos/Remove/Favorite/{email}/{courseId}")
    public ResponseEntity<String> removeCourseToFavorite(@PathVariable String email, @PathVariable long courseId){
        return ResponseEntity.status(200).body(service.removeCourseToFavorite(email, courseId));
    }
}
