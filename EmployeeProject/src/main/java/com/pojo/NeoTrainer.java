package com.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="NeoTrainer")
@PrimaryKeyJoinColumn(name="tr_id")
public class NeoTrainer extends Employee2{
	@Column(name = "training_tech")
	private String trainingTechnology;
	@Column(name="pay_per_hr")
	private double extraPayPerHour;
	
	
	public NeoTrainer() {
		super();
	}


	public NeoTrainer(String trainingTechnology, double extraPayPerHour) {
		super();
		this.trainingTechnology = trainingTechnology;
		this.extraPayPerHour = extraPayPerHour;
	}


	public String getTrainingTechnology() {
		return trainingTechnology;
	}


	public void setTrainingTechnology(String trainingTechnology) {
		this.trainingTechnology = trainingTechnology;
	}


	public double getExtraPayPerHour() {
		return extraPayPerHour;
	}


	public void setExtraPayPerHour(double extraPayPerHour) {
		this.extraPayPerHour = extraPayPerHour;
	}


	@Override
	public String toString() {
		return "NeoTrainer [trainingTechnology=" + trainingTechnology + ", extraPayPerHour=" + extraPayPerHour + "]";
	}
	
	
	

}
