import com.example.demo.entity.Employee;

public class exp12 {
    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.setName("Alice");
        employee.setDepartment("Engineering");
        employee.setSalary(85000.0);

        System.out.println("exp12 structured example");
        System.out.println("Employee name: " + employee.getName());
        System.out.println("Department: " + employee.getDepartment());
        System.out.println("Salary: " + employee.getSalary());
        System.out.println();
        System.out.println("Structured classes are located in:");
        System.out.println("- com.example.demo.entity.Employee");
        System.out.println("- com.example.demo.repository.EmployeeRepository");
        System.out.println("- com.example.demo.service.EmployeeService");
        System.out.println("- com.example.demo.controller.EmployeeController");
    }
}
 