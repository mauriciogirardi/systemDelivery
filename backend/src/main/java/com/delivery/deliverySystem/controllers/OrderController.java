package com.delivery.deliverySystem.controllers;

import java.io.Serializable;
import java.util.List;

import com.delivery.deliverySystem.dtos.OrderDTO;
import com.delivery.deliverySystem.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
