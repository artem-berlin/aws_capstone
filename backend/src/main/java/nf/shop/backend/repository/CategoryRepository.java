package nf.shop.backend.repository;

import nf.shop.backend.product.ProductData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends MongoRepository<ProductData, String> {
    Optional<ProductData> findByCategory(String category);
//        List<ProductData> findAllByClientId(String clientID);
//        void deleteProductDataByIdAndClientId(String id, String clientID);



}
