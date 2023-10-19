package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.DTO.AuthenticationDTO;
import InAcademy.example.InAcademy.Model.DTO.LoginResponseDTO;
import InAcademy.example.InAcademy.Model.DTO.RegisterDTO;
import InAcademy.example.InAcademy.Model.UserModel;
import InAcademy.example.InAcademy.Service.TokenService;
import InAcademy.example.InAcademy.Service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO user){
        var userPassword = new UsernamePasswordAuthenticationToken(user.email(), user.password());
        var auth= authenticationManager.authenticate(userPassword);

        var token = tokenService.generateToken((UserModel) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data ){

        if(userService.getUser(data.email()) != null) return ResponseEntity.badRequest().build();

        userService.createUser(data);
        return ResponseEntity.ok().build();
    }
}
