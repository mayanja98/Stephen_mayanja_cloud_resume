package com.resume.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows calls from React dev server (e.g., localhost:5173)
public class VisitorController {

    private final VisitorService visitorService;

    @Autowired
    public VisitorController(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    @GetMapping("/visitors")
    public Map<String, Integer> getVisitorCount() {
        int count = visitorService.incrementAndGetVisitorCount();
        Map<String, Integer> response = new HashMap<>();
        response.put("count", count);
        return response;
    }
}
