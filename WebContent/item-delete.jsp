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
		String fileName = delDay + ".txt"; //������ ���ϸ�
		String filePath = "C:/Users/������/Desktop/1/";//request.getSession().getServletContext().getRealPath("/saved/");
		filePath += fileName;
		out.println(filePath);
		List<String> bizList = null;
		BufferedReader br = null;
		String deldata = "�̸� : " + delTitle + " ���: " + delContent;

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
		for (String biz : bizList) {
			if (biz.equals(deldata)) {
				int i = bizList.indexOf(biz);
				bizList.remove(i);

				if (!bizList.isEmpty()) {
				File f = new File(filePath);
				f.delete();
					f.createNewFile(); //���ϻ���
					FileWriter fw = new FileWriter(filePath); //���Ͼ��ⰴü����
					for (int j = 0; j < bizList.size(); j++) {
						fw.write(bizList.get(j) + "\r\n");//���Ͽ��� �ۼ�
					}
					fw.close();
				}
			}
		}
		out.print(bizList);
	%>
</body>
</html>