package nf.shop.backend.controller;

import nf.shop.backend.model.AdminData;
import nf.shop.backend.service.AdminService;
import nf.shop.backend.service.ClientService;
import nf.shop.backend.model.ClientData;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping
    public AdminData createAdmin(@RequestBody AdminData admin){
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminService.createAdmin(admin);
    }

}
