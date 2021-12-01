package com.delivery.deliverySystem.services;

import java.util.List;
import java.util.stream.Collectors;

import com.delivery.deliverySystem.dtos.OrderDTO;
import com.delivery.deliverySystem.entities.Order;
import com.delivery.deliverySystem.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrdersWithProducts();
        
        return list.stream()
            .map(order -> new OrderDTO(order))
            .collect(Collectors.toList());
    }
}
