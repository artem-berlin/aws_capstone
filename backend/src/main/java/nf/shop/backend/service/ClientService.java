package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.model.ClientData;
import nf.shop.backend.repository.ClientRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientData createClient(ClientData client) {
        return clientRepository.save(client);
    }


    public Optional<ClientData> findByClientEmail(String clientName) {
        return clientRepository.findByEmail(clientName);
    }




}
