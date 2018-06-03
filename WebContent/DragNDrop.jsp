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
		String newDay = request.getParameter("newDay");
		String oldDay = request.getParameter("oldDay");
		String newTitle = request.getParameter("newTitle");
		String newContent = request.getParameter("newContent");
		int oldIndex = Integer.parseInt(request.getParameter("oldIndex"));
		int newIndex = Integer.parseInt(request.getParameter("newIndex"));

		String fileName = oldDay + ".txt"; //생성할 파일명
		String filePath = application.getRealPath("/") + "saved/";
		String fileName1 = newDay + ".txt";
		String filePath1 = application.getRealPath("/") + "saved/";
		filePath += fileName;
		filePath1 += fileName1;
		out.println(filePath);
		out.println(filePath1);
		BufferedReader br = new BufferedReader(new FileReader(filePath));

		String deldata = "이름 :\t" + newTitle + "\t댓글:\t" + newContent;
		int count = 0;
		String dummy = "";
		String temp = null;
		out.println(deldata);
		while ((temp = br.readLine()) != null) {
			if (!(count == oldIndex)) {
				dummy += temp + "\r\n";
			}
			count++;
		}
		br.close();
		FileWriter fw = new FileWriter(filePath);
		fw.write(dummy);
		fw.close();

		BufferedReader br1 = new BufferedReader(new FileReader(filePath1));

		String deldata1 = "이름 :\t" + newTitle + "\t댓글:\t" + newContent;
		int count1 = 0;
		String dummy1 = "";
		String temp1 = null;
		while ((temp1 = br1.readLine()) != null) {
			out.print(temp1 + "SPACE");
			if (count1 == newIndex) {
				dummy1 += (deldata1 + "\r\n" + temp1 + "\r\n");
			} else {
				dummy1 += temp1 + "\r\n";
			}
			count1++;
		}
		if (newIndex == (count1)) {
			dummy1 += deldata1 + "\r\n";
		}
		br1.close();
		out.println(dummy1);
		FileWriter fw1 = new FileWriter(filePath1);
		fw1.write(dummy1);
		fw1.close();
		
		String date = request.getParameter("date");
		String timePath = application.getRealPath("/")+"saved/modified.txt";
		FileWriter fw2 = new FileWriter(timePath);
		fw2.write(date);
		fw2.close();
	%>
</body>
</html>