package com.availity.test;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FileUtil {

	public static void main(String[] args) throws IOException {
		separateEnrolleesByInsuranceCompanyForCSVFile("inputfilePath/testfile.csv", "outputfileDirectoryPath");
	}
	
	public static void separateEnrolleesByInsuranceCompanyForCSVFile(String inputFilePath, String outPutFileDirectoryPath) throws IOException{
		//assuming inputFilePath is always CSV file
		// no validation and exception handling is done to focus mainly on logic
		
		Map<String, List<User>> map = new HashMap<>();
		try (BufferedReader br = new BufferedReader(new FileReader(inputFilePath))) { //
		    String line;
		    while ((line = br.readLine()) != null) {
		       User user = parseToUser(line);
		       if(map.get(user.getInsuranceCompany()) == null){
		    	  List<User> list = new ArrayList<>();
		    	  list.add(user);
		    	 map.put(user.getInsuranceCompany(), list);
		       }else{
		    	   int index = map.get(user.getInsuranceCompany()).indexOf(user);
		    	   if(index < 0){
		    		   map.get(user.getInsuranceCompany()).add(user);
		    	   }else if(map.get(user.getInsuranceCompany()).get(index).getVersion() < user.getVersion()){
		    		   map.get(user.getInsuranceCompany()).get(index).setVersion(user.getVersion());
		    		   map.get(user.getInsuranceCompany()).get(index).setUserId(user.getUserId());
		    	   }
		       }
		    }
		}
		
		for(Map.Entry<String, List<User>> record : map.entrySet()){
			BufferedWriter bw = new BufferedWriter(new FileWriter(outPutFileDirectoryPath + "/"+record.getKey()+".csv"));
			List<User> users = record.getValue();
			
			Collections.sort(users, (user1, user2) -> {
				if(user1.getLastName().compareTo(user2.getLastName()) == 0){
					return user1.getFirstName().compareTo(user2.getFirstName());
				}
				return user1.getLastName().compareTo(user2.getLastName());
			});
			
			for(User user : users){
				bw.write(user.toStringCommaSeperatedWithOutCompanyName() + System.lineSeparator());
			}
			
			bw.close();
			System.out.println("Succesfully written to file " + record.getKey());
		}
		
		
	}
	
	private static User parseToUser(String inputLine){
		String[] tokens = inputLine.split(",");
		return new User(tokens[0].toUpperCase(),tokens[1].toUpperCase(),tokens[2].toUpperCase(),Integer.valueOf(tokens[3]),tokens[4].toUpperCase());
	}
}
