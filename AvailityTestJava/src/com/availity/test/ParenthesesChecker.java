package com.availity.test;

import java.util.Stack;

public class ParenthesesChecker {

	public static void main(String[] args) {
		//Testing by running with different cases without writing junit test to save some time
		System.out.println(checkParentheses("(()()()(()))"));//true
		System.out.println(checkParentheses("(adsf()()()(()))"));//true
		System.out.println(checkParentheses("()"));//true
		System.out.println(checkParentheses("()()"));//true
		System.out.println(checkParentheses(")("));//false
		System.out.println(checkParentheses("(("));//false
		System.out.println(checkParentheses("))"));//false
		System.out.println(checkParentheses(""));//false
		System.out.println(checkParentheses("("));//false
	}
	
	//no java docs just focusing on logic for now
	public static boolean checkParentheses(String lispCode){
		if(lispCode == null || lispCode.trim().length() == 0 || lispCode.trim().length() == 1){
			return false;
		}
		
		Stack<Character> parenthesesStack = new Stack<>();
		
		for(char p : lispCode.toCharArray()){
			if(p == '('){
				parenthesesStack.push('(');
			}else if(p == ')'){
				if(parenthesesStack.empty() || parenthesesStack.peek() != '('){
					return false;
				}else{
					parenthesesStack.pop();
				}
			}
		}
		return parenthesesStack.empty();
	}

}
