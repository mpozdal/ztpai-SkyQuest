package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.model.Flight;
import com.pozdal.SkyQuest.model.Role;
import com.pozdal.SkyQuest.model.User;
import com.pozdal.SkyQuest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/user")
    public ResponseEntity<List<User>> allUsers() {
        return ResponseEntity.ok(userService.allUsers());
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Integer id) {
        return ResponseEntity.ok(userService.user(id));
    }
    @PostMapping("/user-get")
    public ResponseEntity<Integer> getUserByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.delete(id);
    }
    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Integer id) {
        return userService.update(newUser, id);

    }
    @PutMapping("/userRole/{email}")
    public void updateRole(@RequestBody Role role, @PathVariable String email) {
        userService.updateRole(role, email);

    }

}
