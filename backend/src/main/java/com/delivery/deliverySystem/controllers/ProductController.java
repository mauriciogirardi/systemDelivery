package com.delivery.deliverySystem.controllers;

import java.io.Serializable;
import java.util.List;

import com.delivery.deliverySystem.dtos.ProductDTO;
import com.delivery.deliverySystem.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController implements Serializable {
    private static final long serialVersionUID = 1L;

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        List<ProductDTO> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }
}
