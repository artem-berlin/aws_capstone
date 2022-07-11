package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.product.ProductState;
import nf.shop.backend.repository.ClientRepository;
import nf.shop.backend.product.ProductData;
import nf.shop.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ClientRepository clientRepository;



    public void addProduct(ProductData productData, Principal principal) {
//        productData.setClientId(getClientID(principal));
        productRepository.save(productData);

    }

    public ProductData getProductDataById(String id) {
        Optional<ProductData> product = productRepository.findById(id);
        if (product.isPresent()){
           return product.get();
        }
        return new ProductData();
    }
    public List<ProductData> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Collection<ProductData>getProductList() {
        return productRepository.findAll();
    }

    public void deleteProduct(String id, Principal principal){
//        productRepository.deleteProductDataByIdAndClientId(id, getClientID(principal));
    }

    public void changeProduct(String id, ProductData changedProduct){
        Optional<ProductData> product = productRepository.findById(id);
        if (product.isPresent()){
            ProductData productUnwrapped = product.get();
            productUnwrapped.setTitle(changedProduct.getTitle());
//            productUnwrapped.setState(changedProduct.getState());
//            productUnwrapped.setText(changedProduct.getText());
            productRepository.save(productUnwrapped);
        }
    }

    public void deleteCheckedProduct() {
        productRepository.findAll().stream().filter(product -> product.getState() == ProductState.Available)
                .toList()
                .forEach(product -> productRepository.delete(product));
    }

//    public List<ProductData> findAllByClientId(String email){
//        Optional<ClientData> elem = clientRepository.findByEmail(email);
//        if (elem.isPresent()){
//            return productRepository.findAllByClientId(elem.get().getId());
//        }
//        throw new IllegalArgumentException("Client doesnt exist!");
//    }

    private String getClientID(Principal principal) {
        return clientRepository.findByEmail(principal.getName()).get().getId();
    }
}
