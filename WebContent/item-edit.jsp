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
	request.setCharacterEncoding("UTF-8");
		String oldTitle = request.getParameter("oldTitle");
		String oldContent = request.getParameter("oldContent");
		String newTitle = request.getParameter("newTitle");
		String newContent = request.getParameter("newContent");
		String day = request.getParameter("day");
		int index = Integer.parseInt(request.getParameter("index"));
		
		String date = request.getParameter("date");
		out.print(date);
		String timePath = application.getRealPath("/")+"saved/modified.txt";
		FileWriter fw2 = new FileWriter(timePath);
		fw2.write(date);
		fw2.close();
		
		
		
		String fileName = day + ".txt"; //생성할 파일명
		String filePath = application.getRealPath("/")+"saved\\";
		
		filePath += fileName;
		out.println(filePath);
		ArrayList<String> bizList = null;
		BufferedReader br = new BufferedReader(new FileReader(filePath));
		String newdata = "이름 :\t" + newTitle + "\t댓글:\t" + newContent;

		int count = 0;
		String dummy = "";
		String temp = null;
		while((temp = br.readLine()) != null){
			if(count == index){
				dummy+=newdata+"\r\n";
			}
			else{
				dummy += temp+"\r\n";
			}
			count++;
		}
		br.close();
		
		FileWriter fw = new FileWriter(filePath);
		fw.write(dummy);
		fw.close();
		
	%>
</body>
</html>