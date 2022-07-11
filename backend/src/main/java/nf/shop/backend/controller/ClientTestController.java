package nf.shop.backend.controller;

import nf.shop.backend.service.ClientService;
import nf.shop.backend.model.ClientData;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/client")
@RequiredArgsConstructor
public class ClientTestController {
    private final ClientService clientService;

    @GetMapping
    public String printClientInfo(Principal principal){
        ClientData client = clientService.findByClientEmail(principal.getName()).orElseThrow();
        return "ClientInfo: " + client.getEmail();
    }
}
