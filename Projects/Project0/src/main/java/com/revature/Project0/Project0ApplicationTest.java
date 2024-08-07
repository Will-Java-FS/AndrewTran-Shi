package com.revature.Project0;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
        "DB_username=postgres",
        "DB_password=password"
})

public class Project0ApplicationTest {

    @Test
    void contextLoads() {
        // The test will fail if the application context cannot start
    }
}