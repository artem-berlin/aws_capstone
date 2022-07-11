package nf.shop.backend.repository;

import nf.shop.backend.shoppingcart.ShoppingCart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ShoppingCartRepository extends MongoRepository<ShoppingCart, String> {



}


