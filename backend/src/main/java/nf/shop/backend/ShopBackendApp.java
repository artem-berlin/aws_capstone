package nf.shop.backend;
import org.springframework.boot.context.properties.EnableConfigurationProperties; 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableConfigurationProperties
@EnableWebMvc
@SpringBootApplication
public class ShopBackendApp {

	public static void main(String[] args) {
		SpringApplication.run(ShopBackendApp.class, args);
	}

}
