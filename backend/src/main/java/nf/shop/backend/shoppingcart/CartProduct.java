package nf.shop.backend.shoppingcart;

import lombok.Data;

@Data
public class CartProduct {

    private String productId;
    private String title;
    private String category;
    private String price;

}
