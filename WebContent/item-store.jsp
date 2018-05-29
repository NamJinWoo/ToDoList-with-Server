<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<h1>댓글 저장 결과</h1>

	<%
		String Itemtitle = request.getParameter("title");
		String ItemContent = request.getParameter("content");
		String ItemDay = request.getParameter("day");
		

		if (Itemtitle != null) {
			String fileName = ItemDay + ".txt"; //생성할 파일명
			String filePath = "C:/Users/남진우/Desktop/1/";//request.getSession().getServletContext().getRealPath("/saved/");
			out.println(filePath);
			File fPath = new File(filePath); //경로생성

			if (!fPath.exists()) {
				fPath.mkdirs(); //상위 디렉토리가 존재하지 않으면 상위디렉토리부터 생성.
			}

			filePath += fileName; //생성할 파일명을 전체경로에 결합

			try {
				File f = new File(filePath); // 파일객체생성

				//File fName = new File(fileName);
				if (f.exists()) {
					FileWriter fw = new FileWriter(filePath,true); //파일쓰기객체생성
					String data = "이름 : " + Itemtitle + " 댓글: " + ItemContent;
					fw.write(data+"\r\n");//파일에다 작성
					fw.close();
				}
				// 파일쓰기
				else {
					f.createNewFile(); //파일생성
					FileWriter fw = new FileWriter(filePath); //파일쓰기객체생성
					String data = "이름 : " + Itemtitle + " 댓글: " + ItemContent;

					fw.write(data+"\r\n");//파일에다 작성
					fw.close(); //파일핸들 닫기
				}

			} catch (IOException e) {
				System.out.print(e.toString());
			}
		} else {
			System.out.print("저장되지않았습니다.");
		}
	%>
	<h4>으로 저장되었습니다.</h4>
	<form action="comment-read.jsp">
		<input type="submit" value="목록확인">
	</form>
</body>
</html>