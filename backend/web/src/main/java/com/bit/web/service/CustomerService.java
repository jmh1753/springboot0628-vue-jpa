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

    //모든 엔티티의 개수
    public Long count(){
        return customerRepository.count();
    }

    //식별키를 통한 삭제
    public void delete(Customer customer){
        customerRepository.delete(customer);
    }

    //주어진 모든 엔티티 삭제
    public void delete(Iterable<Customer> it){
        customerRepository.deleteAll(it);
    }

    //모든 엔티티 삭제
    public void deleteAll(){
        customerRepository.deleteAll();
    }

    //식별키를 가진 엔티티가 존재하는지 확인
    public boolean exists(Long id){
        return customerRepository.existsById(id);
    }

    //모든 엔티티 목록
    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }

    //해당 식별키를 가진 엔티티 목록 반환
    public Iterable<Customer> findAll(Iterable<Customer> it){
        return findAll(it);
    }

    //해당 식별키에 해당하는 단일 엔티티 반환
    public Optional<Customer> findById(Long id){
        return customerRepository.findById(id);
    }

    //해당 엔티티들의 등록과 수정
    public Iterable<Customer> save(Iterable<Customer> it){
        return customerRepository.saveAll(it);
    }

    //해당 엔티티의 등록과 수정
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }




    //추가
    public Optional findByCustomerId(String customerId){
        return customerRepository.findByCustomerId(customerId);
    }
    
}