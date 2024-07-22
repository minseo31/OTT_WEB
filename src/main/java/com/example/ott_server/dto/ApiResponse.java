package com.example.ott_server.dto;

import com.example.ott_server.status.ResponseStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private ResponseStatus status;
    private String message;
    private T data;
}
