package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/Users/{email}")
    public ResponseEntity<Object> getUsers(String email) {
        System.out.println("Chegou no endpoint");
        return ResponseEntity.status(200).body(service.getUser(email));
    }
}
