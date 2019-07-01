package com.bit.web.service;

import java.util.List;
import java.util.Optional;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entities.Customer;
import com.bit.web.repositories.CustomerRepository;
import com.bit.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired CustomerRepository customerRepository;

    public long	count(){
        return customerRepository.count();
    }
    
    public void	delete(Customer entity){
        customerRepository.delete(entity);
    }
    
    public void	deleteAll(){
        customerRepository.deleteAll();
    }
    
    public void	deleteAll(Iterable<Customer> entities){
        customerRepository.deleteAll(entities);
    }
    
    public void	deleteById(Long id){
        customerRepository.deleteById(id);
    }
    
    public boolean	existsById(Long id){
        return customerRepository.existsById(id);
    }
    
    public Iterable<Customer>	findAll(){
        return customerRepository.findAll();
    }
    
    public Iterable<Customer>	findAllById(Iterable<Long> ids){
        return customerRepository.findAllById(ids);
    }
    
    public Optional<Customer>	findById(Long id){
        return customerRepository.findById(id);
    }
    
    public Customer	save(Customer entity){
        return customerRepository.save(entity);
    }
 
    public Iterable<Customer>	saveAll(Iterable<Customer> entities){
        return customerRepository.saveAll(entities);
    }

    public Customer findByCustomerId(String id, String password){
        System.out.println("사용자가 입력한id : " + id);
        System.out.println("사용자가 입력한password : " + password);

        Customer customer = customerRepository.findByCustomerId(id);
        System.out.println("DB에서 조회 id: " + customer.getCustomerId());
        System.out.println("DB에서 조회 pwd: " + customer.getPassword());
        
        return null;
    }
 

  
  





    // //추가
    // public Optional findByCustomerId(String customerId){
    //     return customerRepository.findByCustomerId(customerId);
    // }
    
}