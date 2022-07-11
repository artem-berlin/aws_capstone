package nf.shop.backend.service;

import nf.shop.backend.product.ProductData;
//import nf.shop.backend.repository.ClientRepository;
//import nf.shop.backend.repository.ProductRepository;
//import org.junit.jupiter.api.Test;
//
//import java.security.Principal;
//import java.util.Collection;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.mock;
//import static org.mockito.Mockito.*;
//
//class ProductServiceTest {
//    Principal testPrincipal = new Principal() {
//        @Override
//        public String getName() {
//            return "Test";
//        }
//    };
//
//
//    @Test
//    void addProduct() {
//        //GIVEN
//        ProductData testProduct = new ProductData("Violine1", "text", "text", "text", "text", 1);
//        ProductRepository productRepoMock = mock(ProductRepository.class);
//        ClientRepository clientRepoMock = mock(ClientRepository.class);
//        when(productRepoMock.save(testProduct)).thenReturn(testProduct);
//        ProductService testService = new ProductService(productRepoMock, clientRepoMock);
//        //WHEN
//        testService.addProduct(testProduct, testPrincipal);
//        //THEN
//        verify(productRepoMock).save(testProduct);
//    }
//
//
//    @Test
//    void getProductDataById() {
//        //GIVEN
//        ProductData testProduct = new ProductData("Violine1", "text", "text", "text", "text", 1);
//        String id = testProduct.getId();
//        ProductRepository ProductRepoMock = mock(ProductRepository.class);
//        ClientRepository clientRepoMock = mock(ClientRepository.class);
//        when(ProductRepoMock.findById(id)).thenReturn(Optional.of(testProduct));
//        ProductService testService = new ProductService(ProductRepoMock, clientRepoMock);
//        //WHEN
//        ProductData actual = testService.getProductDataById(id);
//        //THEN
//        assertEquals(testProduct, actual);
//    }
//
//
//    @Test
//    void getProductDataByCategory() {
//        // GIVEN
//        ProductData testProduct = new ProductData("Violine1", "text", "text", "text", "text", 1);
//
//        ProductRepository productMock = mock(ProductRepository.class);
//
//        ClientRepository clientRepoMock = mock(ClientRepository.class);
//        when(productMock.findByCategory(testProduct.getCategory())).thenReturn(List.of(testProduct));
//
//        ProductService testService = new ProductService(productMock, clientRepoMock);
//        //WHEN
//        List<ProductData> actual = testService.getProductsByCategory(testProduct.getCategory());
//        //THEN
//        assertEquals(List.of(testProduct), actual);
//    }
//
//    @Test
//    void getProductList() {
//
//        //GIVEN
//        ProductData testProduct1 = new ProductData("Violine1", "text", "text", "text", "text", 1);
//        ProductData testProduct2 = new ProductData("Violine2", "text", "text", "text", "text", 1);
//        List<ProductData> productList = List.of(testProduct1, testProduct2);
//        ProductRepository productMock = mock(ProductRepository.class);
//        ClientRepository clientRepoMock = mock(ClientRepository.class);
//        when(productMock.findAll()).thenReturn(productList);
//        when(productMock.findAll()).thenReturn(productList);
//
//        ProductService testService = new ProductService(productMock, clientRepoMock);
//        //WHEN
//        Collection<ProductData> actual = testService.getProductList();
//        //THEN
//        assertEquals(productList, actual);
//    }
//
//    @Test
//    void deleteProduct() {
//    }
//
//    @Test
//    void changeProduct() {
//    }
//
//    @Test
//    void deleteCheckedProduct() {
//    }
//}