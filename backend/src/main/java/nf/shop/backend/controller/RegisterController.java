//package nf.shop.backend.controller;
//
//import lombok.RequiredArgsConstructor;
//import nf.shop.backend.model.LoginData;
//import nf.shop.backend.service.JwtService;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//@RestController
//@RequestMapping("/api/auth/login")
//@RequiredArgsConstructor
//public class RegisterController {
//
//
//    private final AuthenticationManager authenticationManager;
//    private final JwtService jwtService;
//
//    @PostMapping
//    public String login(@RequestBody LoginData data){        //im Object convert, auth variant2
//        try {
//            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                    data.getEmail(), data.getPassword()
//            ));
//
//            Map<String, Object> claims = new HashMap<>();
//            claims.put("roles", getRoles(auth));
//            return jwtService.createToken(claims, data.getEmail());
//
//        } catch (Exception e){
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
//        }
//    }
//    private List<String> getRoles(Authentication auth){
//        return auth.getAuthorities()
//                .stream().map(GrantedAuthority::getAuthority)
//                .toList();
//    }
//
//}
