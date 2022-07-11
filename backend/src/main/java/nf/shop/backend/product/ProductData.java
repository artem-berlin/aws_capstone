package nf.shop.backend.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductData {

    @Id
    private String id;
    private String title = "";
    private String category = "";
    private String description = "";
    private String image ="";
    private String price = "";
    private int amount ;

    private ProductState state = ProductState.Available;

    public ProductData(String title, String category, String description, String image, String price,  int amount) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.image = image;
        this.price = price;
        this.amount = amount;


    }


//    private String clientId;

//   private List<Image> images = new ArrayList<Object>();
//    public ProductData(String description){
//        this.description = description;
//    }



}
