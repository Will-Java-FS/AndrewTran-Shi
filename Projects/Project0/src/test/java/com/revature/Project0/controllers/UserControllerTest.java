package com.revature.Project0.controllers;

import com.revature.Project0.models.User;
import com.revature.Project0.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegister() {
        User user = new User();
        user.setUsername("testUser");
        user.setPassword("testPass");
        user.setEmail("testEmail");

        when(userService.register(user)).thenReturn(user);

        ResponseEntity<User> response = userController.register(user);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(user, response.getBody());
        verify(userService, times(1)).register(user);
    }

    @Test
    void testRegisterConflict() {
        User user = new User();
        user.setUsername("testUser");
        user.setPassword("testPass");
        user.setEmail("testEmail");

        when(userService.register(user)).thenThrow(new IllegalArgumentException());

        ResponseEntity<User> response = userController.register(user);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        verify(userService, times(1)).register(user);
    }

    @Test
    void testLoginSuccess() {
        User user = new User();
        user.setUsername("testUser");
        user.setPassword("testPass");

        when(userService.login("testUser", "testPass")).thenReturn(user);

        ResponseEntity<User> response = userController.login(user);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
        verify(userService, times(1)).login("testUser", "testPass");
    }

    @Test
    void testLoginUnauthorized() {
        User user = new User();
        user.setUsername("testUser");
        user.setPassword("testPass");

        when(userService.login("testUser", "testPass")).thenReturn(null);

        ResponseEntity<User> response = userController.login(user);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        verify(userService, times(1)).login("testUser", "testPass");
    }
}