package InAcademy.example.InAcademy.Controllers;

import InAcademy.example.InAcademy.Model.AvaliationsModel;
import InAcademy.example.InAcademy.Model.DTO.AvaliationsDTO;
import InAcademy.example.InAcademy.Service.AvaliationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class AvaliationsController {

    @Autowired
    private AvaliationsService service;

    @GetMapping("/Avaliations/All")
    public ResponseEntity<List<AvaliationsModel>> getAvaliations(){
        return ResponseEntity.ok().body(service.getAvaliations());
    }

    @PostMapping("/Avaliations/CreateAvaliation")
    public ResponseEntity<AvaliationsModel> createAvaliation(@RequestBody @Valid AvaliationsDTO avaliation){
        return ResponseEntity.status(201).body(service.createAvaliation(avaliation));
    }
}
