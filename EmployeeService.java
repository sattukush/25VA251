package com.example.demo.service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    @Autowired
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    public Employee updateEmployee(int id, Employee updatedEmployee) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setName(updatedEmployee.getName());
                    existing.setDepartment(updatedEmployee.getDepartment());
                    existing.setSalary(updatedEmployee.getSalary());
                    return repository.save(existing);
                })
                .orElse(null);
    }

    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee deleted";
    }
}
