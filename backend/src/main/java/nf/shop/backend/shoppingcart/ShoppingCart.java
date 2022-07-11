package nf.shop.backend.shoppingcart;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "shoppingcart")
@Data
@NoArgsConstructor

public class ShoppingCart {



    @Id
    private String id;
    private String username;
    private List<LineItem> items = new ArrayList<>();


}


