package com.revature.Project0.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import org.junit.jupiter.api.Test;

public class UserTest {

    @Test
    void testGetId() {
        User user = new User();
        user.setId(1L);
        assertEquals(1L, user.getId());
    }

    @Test
    void testSetId() {
        User user = new User();
        user.setId(1L);
        assertEquals(1L, user.getId());
    }

    @Test
    void testGetEmail() {
        User user = new User();
        user.setEmail("test@example.com");
        assertEquals("test@example.com", user.getEmail());
    }

    @Test
    void testSetEmail() {
        User user = new User();
        user.setEmail("test@example.com");
        assertEquals("test@example.com", user.getEmail());
    }

    @Test
    void testGetUsername() {
        User user = new User();
        user.setUsername("testUser");
        assertEquals("testUser", user.getUsername());
    }

    @Test
    void testSetUsername() {
        User user = new User();
        user.setUsername("testUser");
        assertEquals("testUser", user.getUsername());
    }

    @Test
    void testGetPassword() {
        User user = new User();
        user.setPassword("testPass");
        assertEquals("testPass", user.getPassword());
    }

    @Test
    void testSetPassword() {
        User user = new User();
        user.setPassword("testPass");
        assertEquals("testPass", user.getPassword());
    }

    @Test
    void testEquals() {
        User user1 = new User();
        user1.setId(1L);
        user1.setEmail("test@example.com");
        user1.setUsername("testUser");
        user1.setPassword("testPass");

        User user2 = new User();
        user2.setId(1L);
        user2.setEmail("test@example.com");
        user2.setUsername("testUser");
        user2.setPassword("testPass");

        // Testing equality with identical fields
        assertEquals(user1, user2);

        // Testing inequality with different fields
        user2.setUsername("differentUser");
        assertNotEquals(user1, user2);
    }

    @Test
    void testHashCode() {
        User user1 = new User();
        user1.setId(1L);
        user1.setEmail("test@example.com");
        user1.setUsername("testUser");
        user1.setPassword("testPass");

        User user2 = new User();
        user2.setId(1L);
        user2.setEmail("test@example.com");
        user2.setUsername("testUser");
        user2.setPassword("testPass");

        // Hash codes should be the same for equal objects
        assertEquals(user1.hashCode(), user2.hashCode());

        // Testing different hash codes
        user2.setUsername("differentUser");
        assertNotEquals(user1.hashCode(), user2.hashCode());
    }

    @Test
    void testToString() {
        User user = new User();
        user.setId(1L);
        user.setEmail("test@example.com");
        user.setUsername("testUser");
        user.setPassword("testPass");

        // Assuming Lombok generates the following toString() implementation
        String expectedString = "User(id=1, email=test@example.com, password=testPass, username=testUser)";
        assertEquals(expectedString, user.toString());
    }
}