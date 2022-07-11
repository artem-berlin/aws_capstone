package nf.shop.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clients")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientData {

    @Id
    private String id;
    private String email;
    private String password;
    private String clientName;
    private String role = "Client";
}
