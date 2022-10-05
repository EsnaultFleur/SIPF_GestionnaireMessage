package com.sipf.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.*;

@SpringBootApplication()
public class SipfApiApplication {

	public static void main(String[] args) throws SQLException {
		SpringApplication.run(SipfApiApplication.class, args);
	}
}
