package com.employee.leaveportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin(origins = "*")
public class EmployeeLeaveController {

    @Autowired
    private LeaveRepository leaveRepository;

    @PostMapping("/apply")
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leaveRequest) {
        return leaveRepository.save(leaveRequest);
    }

    @GetMapping("/all")
    public List<LeaveRequest> getAllLeaves() {
        return leaveRepository.findAll();
    }
}