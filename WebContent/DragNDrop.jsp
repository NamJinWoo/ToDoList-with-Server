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
		String fileName = newDay + ".txt"; //생성할 파일명
		String filePath = "C:/Users/남진우/Desktop/1/";//request.getSession().getServletContext().getRealPath("/saved/");
		filePath += fileName;
		out.println(filePath);
		List<String> bizList = null;
		BufferedReader br = null;

		if (!(filePath == null)) {
			bizList = new ArrayList<String>();
			try {
				br = new BufferedReader(new FileReader(filePath));
				String s;

				while ((s = br.readLine()) != null) {
					bizList.add(s);
				}
				br.close();
			} catch (IOException e) {
				System.err.println(e);
			} finally {
				try {
					if (br != null) {
						br.close();
					}
				} catch (Exception ex) {
				}
			}
		}
		File f = new File(filePath);
		f.delete();
		f.createNewFile(); //파일생성
		FileWriter fw = new FileWriter(filePath); //파일쓰기객체생성
		for (int j = 0; j < bizList.size(); j++) {
			fw.write(bizList.get(j) + "\r\n");//파일에다 작성
		}
		fw.close();
		out.print(bizList);
	%>
</body>
</html>