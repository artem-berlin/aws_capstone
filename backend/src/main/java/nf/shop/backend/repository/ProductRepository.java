package nf.shop.backend.repository;

import nf.shop.backend.product.ProductData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<ProductData, String> {
    List<ProductData> findByCategory(String category);

//        void deleteProductDataByIdAndClientId(String id, String clientID);



}
