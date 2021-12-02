package com.delivery.deliverySystem.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import com.delivery.deliverySystem.dtos.OrderDTO;
import com.delivery.deliverySystem.dtos.ProductDTO;
import com.delivery.deliverySystem.entities.Order;
import com.delivery.deliverySystem.entities.OrderStatus;
import com.delivery.deliverySystem.entities.Product;
import com.delivery.deliverySystem.repositories.OrderRepository;
import com.delivery.deliverySystem.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrdersWithProducts();
        
        return list.stream()
            .map(order -> new OrderDTO(order))
            .collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        
        Order order = new Order(
            null, 
            dto.getAddress(), 
            dto.getLatitude(),
            dto.getLongitude(),
            Instant.now(), 
            OrderStatus.PENDING  
        );

        for (ProductDTO product : dto.getProducts()) {
            Product productId = productRepository.getOne(product.getId());
            order.getProducts().add(productId);
        }

        order = repository.save(order);
        return new OrderDTO(order);
    }
}
