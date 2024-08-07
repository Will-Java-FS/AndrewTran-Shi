package com.revature.Project0.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

public class ItemTest {

    @Test
    void testGetId() {
        Item item = new Item();
        item.setId(1L);
        assertEquals(1L, item.getId());
    }

    @Test
    void testSetId() {
        Item item = new Item();
        item.setId(1L);
        assertEquals(1L, item.getId());
    }

    @Test
    void testGetName() {
        Item item = new Item();
        item.setName("Test Item");
        assertEquals("Test Item", item.getName());
    }

    @Test
    void testSetName() {
        Item item = new Item();
        item.setName("Test Item");
        assertEquals("Test Item", item.getName());
    }

    @Test
    void testGetDescription() {
        Item item = new Item();
        item.setDescription("This is a test item.");
        assertEquals("This is a test item.", item.getDescription());
    }

    @Test
    void testSetDescription() {
        Item item = new Item();
        item.setDescription("This is a test item.");
        assertEquals("This is a test item.", item.getDescription());
    }

    @Test
    void testGetStatus() {
        Item item = new Item();
        item.setStatus(true);
        assertTrue(item.isStatus());
    }

    @Test
    void testSetStatus() {
        Item item = new Item();
        item.setStatus(true);
        assertTrue(item.isStatus());
    }

    @Test
    void testGetUser() {
        User user = new User();
        user.setId(1L);
        Item item = new Item();
        item.setUser(user);
        assertEquals(user, item.getUser());
    }

    @Test
    void testSetUser() {
        User user = new User();
        user.setId(1L);
        Item item = new Item();
        item.setUser(user);
        assertEquals(user, item.getUser());
    }

    @Test
    void testEquals() {
        User user1 = new User();
        user1.setId(1L);

        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Test Item");
        item1.setDescription("Description");
        item1.setStatus(true);
        item1.setUser(user1);

        Item item2 = new Item();
        item2.setId(1L);
        item2.setName("Test Item");
        item2.setDescription("Description");
        item2.setStatus(true);
        item2.setUser(user1);

        // Testing equality with identical fields
        assertEquals(item1, item2);

        // Testing inequality with different fields
        item2.setName("Different Item");
        assertNotEquals(item1, item2);
    }

    @Test
    void testHashCode() {
        User user1 = new User();
        user1.setId(1L);

        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Test Item");
        item1.setDescription("Description");
        item1.setStatus(true);
        item1.setUser(user1);

        Item item2 = new Item();
        item2.setId(1L);
        item2.setName("Test Item");
        item2.setDescription("Description");
        item2.setStatus(true);
        item2.setUser(user1);

        // Hash codes should be the same for equal objects
        assertEquals(item1.hashCode(), item2.hashCode());

        // Testing different hash codes
        item2.setName("Different Item");
        assertNotEquals(item1.hashCode(), item2.hashCode());
    }

    @Test
    void testToString() {
        User user1 = new User();
        user1.setId(1L);

        Item item = new Item();
        item.setId(1L);
        item.setName("Test Item");
        item.setDescription("Description");
        item.setStatus(true);
        item.setUser(user1);

        // Assuming Lombok generates the following toString() implementation
        String expectedString = "Item(id=1, name=Test Item, description=Description, status=true, user=User(id=1, email=null, password=null, username=null))";
        assertEquals(expectedString, item.toString());
    }
}