package nf.shop.backend.service;

import lombok.RequiredArgsConstructor;
import nf.shop.backend.model.AdminData;
import nf.shop.backend.repository.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {


    private final AdminRepository adminRepository;

    public AdminData createAdmin(AdminData admin){
        return adminRepository.save(admin);
    }



 }



