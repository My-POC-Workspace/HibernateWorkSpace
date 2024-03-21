package com.db;

import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class MyConnection {

	public static SessionFactory connect(){
		StandardServiceRegistry ssr=new StandardServiceRegistryBuilder().configure("Hibernate.cfg.xml").build();
		System.out.println("file loaded successfully");
		MetadataSources ms=new MetadataSources(ssr);
		Metadata metadata=ms.getMetadataBuilder().build();
		SessionFactory sessionFact=metadata.getSessionFactoryBuilder().build();
	
		
		return sessionFact;
	}
	public static void main(String[] args) {
		connect();
	}
	
}