package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.repository.ShoppingCartRepository;
import nf.shop.backend.shoppingcart.ShoppingCart;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ShoppingCartService {


    private final ShoppingCartRepository shoppingCartRepository;

    public Collection<ShoppingCart>getShoppingCartList() {
        return shoppingCartRepository.findAll();
    }

    public void deleteShoppingCart(String id) {
        shoppingCartRepository.deleteById(id);
    }

    public ShoppingCart addShoppingCart(ShoppingCart shoppingCart) {
        return shoppingCartRepository.save(shoppingCart);
    }

    public ShoppingCart getShoppingCartById(String id) {
        Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(id);
        return shoppingCart.orElseGet(ShoppingCart::new);
    }

    public void changeShoppingCart(String id, ShoppingCart changedShoppingCart) {
        Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(id);
        if (shoppingCart.isPresent()){
            ShoppingCart cartUnwrapped = shoppingCart.get();
            shoppingCartRepository.save(cartUnwrapped);
        }
    }
}


