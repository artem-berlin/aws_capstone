package nf.shop.backend.repository;

import nf.shop.backend.model.ClientData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends MongoRepository<ClientData, String> {
    Optional<ClientData>findByEmail(String email);
}
