package nf.shop.backend.controller;

//
//import io.swagger.models.Response;
//import nf.shop.backend.model.*;
//import nf.shop.backend.product.ProductData;
//import org.junit.jupiter.api.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.*;
//import static org.junit.jupiter.api.Assertions.*;
//
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.List;
//import java.util.Objects;
////
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//class ProductControllerTest {
//   @Autowired
//    private TestRestTemplate testRestTemplate;
//
//    final private ProductData productData1 = new ProductData("Violine1","text","text","text","text",1);
//    final private ProductData productData2 = new ProductData("Violine2","text","text","text","text",1);
//    final private RegisterData client = new RegisterData("aa","aa","aa");
//    private HttpHeaders createHeaders(String token){
//       String authHeader = "Bearer " + token;
//       HttpHeaders headers = new HttpHeaders();
//       headers.set("Authorization", authHeader);
//
//        return headers;
//    }
//    @Test
//    void getProductList() {
//        //GIVEN
//        ResponseEntity<ClientData> clientResponse = testRestTemplate.postForEntity("/api/clients", client, ClientData.class);
//        assertEquals(200, clientResponse.getStatusCodeValue());
//
//        ResponseEntity<String> tokenResponseEntity = testRestTemplate.postForEntity("/api/auth/login", new LoginData("aa", "aa"), String.class);
//        String token = tokenResponseEntity.getBody();
//
//        ResponseEntity<ProductData[]> productResponse1 = testRestTemplate.exchange("/api/product",HttpMethod.POST,new HttpEntity<>(productData1,createHeaders(token)), ProductData[].class);
//        assertEquals(1, productResponse1.getBody().length);
//
//        ResponseEntity<ProductData[]> productResponse2 = testRestTemplate.exchange("/api/product", HttpMethod.POST,new HttpEntity<>(productData2,createHeaders(token)), ProductData[].class);
//        assertEquals(2, productResponse2.getBody().length);
//
//        //WHEN
//        ResponseEntity<ProductData[]> actualResponse = testRestTemplate.exchange("/api/product",
//                HttpMethod.GET,
//                new HttpEntity<>(createHeaders(token)),
//                ProductData[].class);
//
//       //THEN
//       assertEquals(HttpStatus.OK,actualResponse.getStatusCode());
//        Collection<ProductData> actual = Arrays.stream(Objects.requireNonNull(actualResponse.getBody())).toList();
//    }

//    @Test
//    void getProductDataByCategory() {
//
//    }
//
//    @Test
//    void getProductDataById() {
//    }
//
//    @Test
//    void addProduct() {
//
//            //GIVEN
//                ResponseEntity<ClientData> clientResponse = testRestTemplate.postForEntity("/api/clients", client, ClientData.class);
//                assertEquals(200, clientResponse.getStatusCodeValue());
//                ResponseEntity<String> tokenResponseEntity = testRestTemplate.postForEntity("/auth/login", client,String.class);
//                 String token = tokenResponseEntity.getBody();
//        ResponseEntity<ProductData[]> productResponse1 = testRestTemplate.exchange("/api/product",HttpMethod.POST,new HttpEntity<>(productData1,createHeaders(token)), ProductData[].class);
//        assertEquals(1, productResponse1.getBody().length);
//
//            //WHEN
//
//           ResponseEntity<ProductData[]> actualResponse = testRestTemplate.exchange("/api/product",
//                    HttpMethod.POST,
//                    new HttpEntity<>(createHeaders(token) ),
//                   ProductData[].class);
//            //THEN
//            assertEquals(HttpStatus.OK,actualResponse.getStatusCode());
//
//        ProductData[] actual = actualResponse.getBody();
//        assertEquals( productData1.getTitle(),actualResponse.getBody());
//
//       }
//


//}