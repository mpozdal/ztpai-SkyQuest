package com.pozdal.SkyQuest.controller;

import com.pozdal.SkyQuest.config.LoginResponse;
import com.pozdal.SkyQuest.dto.LoginUserDto;
import com.pozdal.SkyQuest.dto.RegisterUserDto;
import com.pozdal.SkyQuest.model.User;
import com.pozdal.SkyQuest.service.AuthenticationService;
import com.pozdal.SkyQuest.service.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import ch.qos.logback.core.util.Duration;

@RequestMapping("/api/v1/auth")
@RestController
@CrossOrigin(origins = "*")
public class AuthenticationController {
    private final JwtService jwtService;
    @Value("${cookies.domain}")
    private String domain;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }


    @PostMapping("/login")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        try {
            User authenticatedUser = authenticationService.authenticate(loginUserDto);

            String jwtToken = jwtService.generateToken(authenticatedUser);

            ResponseCookie cookie = ResponseCookie.from("jwt", jwtToken)
                    .domain(domain)
                    .path("/")
                    .maxAge(Duration.buildByDays(365).getMilliseconds())
                    .build();

            LoginResponse loginResponse = new LoginResponse(jwtToken, Duration.buildByDays(365).getMilliseconds());

            return ResponseEntity.ok(loginResponse);

                    //.header(HttpHeaders.SET_COOKIE, cookie.toString())
                    //.body(jwtToken);
        } catch(BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/validate")
    @CrossOrigin
    public ResponseEntity<?> validateToken(@RequestParam String token, @AuthenticationPrincipal User user) {
        Boolean isTokenValid = jwtService.isTokenValid(token, user);
        return ResponseEntity.ok(isTokenValid);
    }
    @GetMapping("/logout")
    @CrossOrigin
    public ResponseEntity<?> logout(@RequestParam String token) {
        ResponseCookie cookie = ResponseCookie.from("jwt", "")
                .domain(domain)
                .path("/")
                .maxAge(0)
                .build();
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString()).body("ok");
    }

}
