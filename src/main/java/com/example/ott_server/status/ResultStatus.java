package com.example.ott_server.status;

public enum ResultStatus {
    SUCCESS("SUCCESS"),
    FAIL("FAIL");

    private String result;

    ResultStatus(String result) {
        this.result = result;
    }

    public String getResult() {
        return result;
    }
}
