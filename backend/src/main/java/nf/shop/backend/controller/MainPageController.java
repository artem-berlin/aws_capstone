package nf.shop.backend.controller;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.product.ProductData;
import nf.shop.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/main")
@RequiredArgsConstructor
@CrossOrigin
public class MainPageController {
    private final ProductService productService;


    @GetMapping
    public Collection<ProductData> getProductList(Principal principal) {
        return productService.getProductList();
    }

    @GetMapping("/{id}")
    public ProductData getProductDataById(@PathVariable String id){
        return productService.getProductDataById(id);
    }

    @GetMapping("/search")
    public List<ProductData> getProductDataByCategory(@RequestParam String category){
        return productService.getProductsByCategory(category);
    }


}
