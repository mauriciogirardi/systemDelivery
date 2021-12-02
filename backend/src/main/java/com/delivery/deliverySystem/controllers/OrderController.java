package com.delivery.deliverySystem.controllers;

import java.io.Serializable;
import java.net.URI;
import java.util.List;

import com.delivery.deliverySystem.dtos.OrderDTO;
import com.delivery.deliverySystem.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/orders")
public class OrderController implements Serializable {
    private static final long serialVersionUID = 1L;

    @Autowired
    private OrderService service;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {

        List<OrderDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto) {

        dto = service.insert(dto);
        
        URI uri = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(dto.getId())
            .toUri();

        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping("/{id}/delivered")
    public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id) {
        OrderDTO dto = service.setDelivered(id);
        return ResponseEntity.ok().body(dto);
    }

    @PutMapping("/{id}/canceled")
    public ResponseEntity<OrderDTO> setCanceled(@PathVariable Long id) {
        OrderDTO dto = service.setCanceled(id);
        return ResponseEntity.ok().body(dto);
    }
}
