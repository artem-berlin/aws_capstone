package nf.shop.backend.controller;

import nf.shop.backend.service.ClientService;
import nf.shop.backend.model.ClientData;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping
    public ClientData createClient(@RequestBody ClientData client){
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        return clientService.createClient(client);
    }
}
