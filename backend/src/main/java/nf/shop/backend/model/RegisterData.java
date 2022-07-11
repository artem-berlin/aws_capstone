package nf.shop.backend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@Data
public class RegisterData
{
    private String email;
    private String password;
    private String  passwordAgain;

}


