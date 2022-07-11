package nf.shop.backend.controller;

import nf.shop.backend.product.ProductData;
import nf.shop.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/product")    // für admin controller
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {
    private final ProductService productService;


    @GetMapping
    public Collection<ProductData> getProductList(Principal principal) {
        return productService.getProductList();
    }

    @GetMapping("/{category}")
    public List<ProductData> getProductDataByCategory(@PathVariable String category){
        return productService.getProductsByCategory(category);
    }
    @GetMapping("/{id}")
    public ProductData getProductDataById(@PathVariable String id){
        return productService.getProductDataById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<ProductData> addProduct(@RequestBody ProductData productData, Principal principal) {
        productService.addProduct(productData, principal);
        return productService.getProductList();
    }

    @PutMapping("/{id}")
    public Collection<ProductData> changeProduct(@PathVariable String id, @RequestBody ProductData product, Principal principal) {
       productService.changeProduct(id, product);
       return productService.getProductList();
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id, Principal principal) {
        productService.deleteProduct(id, principal);
    }

    @DeleteMapping()
    public Collection<ProductData> deleteCheckedProduct(Principal principal) {
        productService.deleteCheckedProduct();
        return productService.getProductList();
    }

}
