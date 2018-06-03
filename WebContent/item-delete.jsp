<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
		String delTitle = request.getParameter("delItem");
		String delContent = request.getParameter("delContent");
		String delDay = request.getParameter("delDay");
		int index = Integer.parseInt(request.getParameter("index"));
		out.println(delDay);
		if (delDay.equals("Mon_test")) {
			delDay = "AMon";
		} else if (delDay.equals("Tue_test")) {
			delDay = "ATue";
		} else if (delDay.equals("Wed_test")) {
			delDay = "AWed";
		} else if (delDay.equals("Thu_test")) {
			delDay = "AThu";
		} else if (delDay.equals("Fri_test")) {
			delDay = "AFri";
		}
		//out.println(delDay);
		//out.println(DelDay);
		String fileName = delDay + ".txt"; //생성할 파일명
		String filePath = application.getRealPath("/") + "saved/";
		filePath += fileName;
		out.println(filePath);
		BufferedReader br =new BufferedReader(new FileReader(filePath));
		String deldata = "이름 :\t" + delTitle + "\t댓글:\t" + delContent;
		int count = 0;
		String dummy = "";
		String temp = null;
		out.println("newjsp");
		out.println(index);
		while((temp = br.readLine()) != null){
			if(!(count == index)){
				dummy += temp+"\r\n";
			}
			count++;
		}
		br.close();
		out.println(dummy);
		FileWriter fw = new FileWriter(filePath);
		fw.write(dummy);
		fw.close();
		
		String date = request.getParameter("date");
		String timePath = application.getRealPath("/")+"saved/modified.txt";
		FileWriter fw2 = new FileWriter(timePath);
		fw2.write(date);
		fw2.close();
		
	%>
</body>
</html>