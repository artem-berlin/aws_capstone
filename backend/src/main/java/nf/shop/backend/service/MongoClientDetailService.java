package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MongoClientDetailService implements UserDetailsService {

    private final ClientService clientService;

    @Override
    public UserDetails loadUserByUsername(String clientName) throws UsernameNotFoundException {
        return clientService.findByClientEmail(clientName)
                .map(userDocument -> new User(userDocument.getEmail(), userDocument.getPassword(), List.of(
                        new SimpleGrantedAuthority("ROLE_" + userDocument.getRole()))))
                .orElseThrow(()-> new UsernameNotFoundException(clientName + " not found"));
    }
}
