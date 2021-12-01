package com.delivery.deliverySystem.services;

import java.util.List;
import java.util.stream.Collectors;

import com.delivery.deliverySystem.dtos.ProductDTO;
import com.delivery.deliverySystem.entities.Product;
import com.delivery.deliverySystem.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> list = repository.findAllByOrderByNameAsc();
        
        return list.stream()
            .map(product -> new ProductDTO(product))
            .collect(Collectors.toList());
    }
}
