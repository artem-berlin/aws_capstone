package nf.shop.backend.controller;

import lombok.RequiredArgsConstructor;

import nf.shop.backend.service.ShoppingCartService;
import nf.shop.backend.shoppingcart.ShoppingCart;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/shoppingcart")
@RequiredArgsConstructor
@CrossOrigin
public class ShoppingCartController {


    private final ShoppingCartService shoppingCartService;

    @GetMapping
    public Collection<ShoppingCart> getShoppingCartList() {
        return shoppingCartService.getShoppingCartList();
    }

    @GetMapping("/{id}")
    public ShoppingCart getShoppingCartById(@PathVariable String id) {
        return shoppingCartService.getShoppingCartById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteShoppingCart(@PathVariable String id){
        shoppingCartService.deleteShoppingCart(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ShoppingCart addShoppingCart(@RequestBody ShoppingCart shoppingCart){
        return shoppingCartService.addShoppingCart(shoppingCart);
    }

    @PutMapping("/{id}")
    public Collection<ShoppingCart>changeShoppingCart(@PathVariable String id, @RequestBody ShoppingCart shoppingCart){
        shoppingCartService.changeShoppingCart(id, shoppingCart);
        return shoppingCartService.getShoppingCartList();
    }

}

