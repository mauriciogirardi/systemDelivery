package com.delivery.deliverySystem.repositories;

import java.util.List;

import com.delivery.deliverySystem.entities.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
   
    List<Product> findAllByOrderByNameAsc();
}
