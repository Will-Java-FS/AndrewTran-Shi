package com.revature.Project0.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.Project0.models.Item;
import com.revature.Project0.services.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ItemControllerTest {

    @Mock
    private ItemService itemService;

    @InjectMocks
    private ItemController itemController;

    private MockMvc mockMvc;
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
        objectMapper = new ObjectMapper();
    }

    @Test
    void testAddItem() throws Exception {
        Item item = new Item();
        item.setId(1L);
        item.setName("Test Item");

        when(itemService.addItem(any(Item.class))).thenReturn(item);

        mockMvc.perform(post("/items")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(item)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Test Item"));

        verify(itemService, times(1)).addItem(any(Item.class));
    }

    @Test
    void testGetAllItems() throws Exception {
        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Item 1");

        Item item2 = new Item();
        item2.setId(2L);
        item2.setName("Item 2");

        List<Item> items = Arrays.asList(item1, item2);

        when(itemService.getAllItems()).thenReturn(items);

        mockMvc.perform(get("/items"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].name").value("Item 1"))
                .andExpect(jsonPath("$[1].name").value("Item 2"));

        verify(itemService, times(1)).getAllItems();
    }

    @Test
    void testGetItemById() throws Exception {
        Item item = new Item();
        item.setId(1L);
        item.setName("Test Item");

        when(itemService.getItemById(anyLong())).thenReturn(item);

        mockMvc.perform(get("/items/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Test Item"));

        verify(itemService, times(1)).getItemById(anyLong());
    }

    @Test
    void testGetItemByIdNotFound() throws Exception {
        when(itemService.getItemById(anyLong())).thenReturn(null);

        mockMvc.perform(get("/items/1"))
                .andExpect(status().isNotFound());

        verify(itemService, times(1)).getItemById(anyLong());
    }

    @Test
    void testUpdateItem() throws Exception {
        Item item = new Item();
        item.setId(1L);
        item.setName("Updated Item");

        when(itemService.updateItem(any(Item.class))).thenReturn(item);

        mockMvc.perform(put("/items/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(item)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Updated Item"));

        verify(itemService, times(1)).updateItem(any(Item.class));
    }

    @Test
    void testUpdateItemNotFound() throws Exception {
        Item item = new Item();
        item.setId(1L);
        item.setName("Non-existing Item");

        when(itemService.updateItem(any(Item.class))).thenReturn(null);

        mockMvc.perform(put("/items/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(item)))
                .andExpect(status().isNotFound());

        verify(itemService, times(1)).updateItem(any(Item.class));
    }

    @Test
    void testDeleteItem() throws Exception {
        doNothing().when(itemService).deleteItem(anyLong());

        mockMvc.perform(delete("/items/1"))
                .andExpect(status().isNoContent());

        verify(itemService, times(1)).deleteItem(anyLong());
    }

    @Test
    void testGetItemsByUserId() throws Exception {
        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Item 1");

        Item item2 = new Item();
        item2.setId(2L);
        item2.setName("Item 2");

        List<Item> items = Arrays.asList(item1, item2);

        when(itemService.getItemsByUserId(anyLong())).thenReturn(items);

        mockMvc.perform(get("/items/user/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].name").value("Item 1"))
                .andExpect(jsonPath("$[1].name").value("Item 2"));

        verify(itemService, times(1)).getItemsByUserId(anyLong());
    }
}