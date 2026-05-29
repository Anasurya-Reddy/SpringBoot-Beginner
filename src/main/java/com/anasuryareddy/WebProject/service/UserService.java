package com.anasuryareddy.WebProject.service;

import java.util.ArrayList;
import java.util.List;

import com.anasuryareddy.WebProject.model.User;

public class UserService {
    
    private List<User> allUsers;

    public UserService() {
        allUsers = new ArrayList<>();
        allUsers.add(new User(1, "Anasurya Reddy", "Male", "img/john.png"));
        allUsers.add(new User(2, "Jane Doe", "Female", "img/jane.png"));
    }

    public List<User> getAllUsers() {
        return allUsers;
    }
        
}
