package com.test;

import com.model.TrainerCrud;
import com.pojo.NeoTrainer;
import com.pojo.Trainer;

public class InheritanceTest {
		public static void main(String[] args) {
			TrainerCrud trcrud = new TrainerCrud();
			NeoTrainer tr=new NeoTrainer();
			tr.setEmpId(66);
			tr.setEmpName("Pooja");
			tr.setEmpSalary(34000);
			tr.setExtraPayPerHour(600);
			tr.setQualification("BE");
			tr.setTrainingTechnology("Python");		
			boolean b=trcrud.addTrainer(tr);
			System.out.println(b);
		}
}