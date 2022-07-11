package nf.shop.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "admin")
@Data
public class AdminData {

    @Id
    private String id;
    private String email;

    private String password;
    private String adminName;

    private String role = "Admin";
}

