package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.UserModel;
import InAcademy.example.InAcademy.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/user/{email}")
    public ResponseEntity<UserModel> getUsers(@PathVariable  String email) {
        return ResponseEntity.status(200).body(service.getUser(email));
    }
}
