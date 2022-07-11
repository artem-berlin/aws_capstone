package nf.shop.backend.repository;

import nf.shop.backend.model.AdminData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends MongoRepository<AdminData, String> {
    Optional<AdminData>findByEmail(String email);
}
