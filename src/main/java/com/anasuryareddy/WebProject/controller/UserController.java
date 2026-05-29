package com.anasuryareddy.WebProject.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anasuryareddy.WebProject.model.User;
import com.anasuryareddy.WebProject.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private UserService userService;
    public UserController() {
        userService = new UserService();
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
