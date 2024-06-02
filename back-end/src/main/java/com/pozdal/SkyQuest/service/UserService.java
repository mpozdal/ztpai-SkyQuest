package com.pozdal.SkyQuest.service;

import com.pozdal.SkyQuest.model.Attraction;
import com.pozdal.SkyQuest.model.Role;
import com.pozdal.SkyQuest.model.User;
import com.pozdal.SkyQuest.repository.AttractionRepository;
import com.pozdal.SkyQuest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> allUsers() {
        return userRepository.findAll();
    }
    public Optional<User> user(Integer id) {
        return userRepository.findById(id);
    }
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }
    public Integer getUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            User temp = user.get();
            return temp.getId();
        }
        return null;
    }

    public User update(User newUser, Integer id) {
        return userRepository.findById(id)
                .orElseGet(() -> {
                    newUser.setId(id);
                    return userRepository.save(newUser);
                });
    }
    public void updateRole(Role role, String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            User userTemp = user.get();
            userTemp.setRole(role);
            userRepository.save(userTemp);
        }

    }
}
