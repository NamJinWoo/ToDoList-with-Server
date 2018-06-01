<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.*"%>
<%@ page import="org.json.JSONObject"%>
<%@ include file="./TP1_SKELETON_JS.js"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
		String k = "kkk";
		String fileName = "AMon" + ".txt"; //생성할 파일명
		String filePath = application.getRealPath("/")+"saved\\";
		filePath += fileName;
		out.println(filePath);	
		JSONObject json = new JSONObject();
		json.put("name", "jinwoo");
		List<String> bizList = null;
		BufferedReader br = null;
		String savedTitle[];
		String savedContent[];
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
		for (int i = 0; i < bizList.size(); i++) {
			bizList.get(i).split("\t");

			FileWriter fw = new FileWriter(filePath); //파일쓰기객체생성
			fw.close();
		}

		out.print(bizList);
	%>
</body>

</html>
