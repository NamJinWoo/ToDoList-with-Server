var modal = document.getElementById("AddToDo_Sec");
var modal1 = document.getElementById("AddToDo_Edit");
var btn = document.getElementById("Add_Btn");
var close = document.getElementById("close");
var EditClose = document.getElementById("Edit_close");
var addcBtn = document.getElementById("Add_Cont_Btn");
var DelBtn = document.getElementById("Del_Btn");
var count = 0;
var AddItemArray = [];
var AddContentArray = [];
var main1 = document.getElementById("mainbar");
var middles = document.getElementsByClassName("middle");
var index = -1;
var mon_string;
var mon_array = [];
var mon_item = [];
var mon_title = [];
var mon_content = [];
var tue_string;
var tue_array = [];
var tue_item = [];
var tue_title = [];
var tue_content = [];
var wed_string;
var wed_array = [];
var wed_item = [];
var wed_title = [];
var wed_content = [];
var thu_string;
var thu_array = [];
var thu_item = [];
var thu_title = [];
var thu_content = [];
var fri_string;
var fri_array = [];
var fri_item = [];
var fri_title = [];
var fri_content = [];
var onclickIndex=0;
var onclickDay;
btn.onclick = function() {
	modal.style.display = "block";
}
close.onclick = function() {
	modal.style.display = "none";
}
$('#Edit_Add_Cont_Btn').click(
		function(event) {
			var index1 = AddItemArray.indexOf(onclickDay.childNodes[onclickIndex].childNodes[1].textContent);
			var days = ["AMon","ATue","AWed","AThu","AFri"];
			var div = $('.test_Mon').eq(onclickIndex);
			var day = $('.displayArea').index(div.closest('section'));
			
			console.log(days[day]);
			AddItemArray.splice(index1, 1, document
					.getElementById("Edit_Add_Cont_Item").value);
			AddContentArray.splice(index1, 1, document
					.getElementById("Edit_Add_Cont_Content").value);
			modal1.style.display = "none";
			onclickDay.childNodes[onclickIndex].childNodes[1].textContent = document
					.createTextNode(AddItemArray[index1]).textContent;
			onclickDay.childNodes[onclickIndex].childNodes[2].firstChild.textContent = document
					.createTextNode(AddContentArray[index1]).textContent;
			var newItem = $('#Edit_Add_Cont_Item').val();
			var newContent = $('#Edit_Add_Cont_Content').val();
			console.log("index:" + onclickIndex);
			$.ajax({
				type : "POST",
				url : "./item-edit.jsp",
				data : {
					"day" : days[day],
					"newTitle" : newItem,
					"newContent" : newContent,
					"index" : onclickIndex
				},
				success : function(xml) {
					console.log(xml);
				},
				error : function(xhr, status, error) {
					alert("??");
					// alert(error);
				}
			});
		});

window.onload = function() {

	$.ajax({
		url : "saved/AMon.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data, status, xhr) {
			mon_string = data;
			console.log(mon_string);
		}
	});
	mon_array = mon_string.split("\n");
	for (var j = 0; j < mon_array.length - 1; j++) {
		mon_item[j] = mon_array[j].split("\t");

	}
	for (var i = 0; i < mon_item.length; i++) {
		AddItemArray.push(mon_item[i][1]);
		AddContentArray.push(mon_item[i][3]);
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");

		document.getElementById("Mon_test").appendChild(div);
		div.setAttribute("class", "test_Mon");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		checkbox.setAttribute("type", "checkbox");

		div.appendChild(div1);
		div1.appendChild(checkbox);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var x = event.target;
			onclickIndex = $(x).index();
			onclickDay = x.parentNode;
			console.log(onclickIndex);
			var oldItem = x.parentNode.childNodes[onclickIndex].childNodes[1].textContent;
			var oldContent = x.parentNode.childNodes[onclickIndex].childNodes[2].textContent;
			var day = "AMon";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = x.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = x.childNodes[2].textContent;

		}
		
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		count++;
	}
	console.log(mon_string);
	console.log(mon_array);
	console.log(mon_item);
	console.log(mon_title);
	console.log(mon_content);
	$.ajax({
		url : "saved/ATue.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data, status, xhr) {
			tue_string = data;
			console.log(tue_string);
		}
	});
	tue_array = tue_string.split("\n");
	for (var j = 0; j < tue_array.length - 1; j++) {
		tue_item[j] = tue_array[j].split("\t");
	}
	for (var i = 0; i < tue_item.length; i++) {
		AddItemArray.push(tue_item[i][1]);
		AddContentArray.push(tue_item[i][3]);
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Tue_test").appendChild(div);
		div.setAttribute("class", "test_Tue");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);

		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = "ATue";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;
			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		count++;
	}

	$.ajax({
		url : "saved/AWed.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data, status, xhr) {
			wed_string = data;
			// console.log(mon_string);
		}
	});
	wed_array = wed_string.split("\n");
	for (var j = 0; j < wed_array.length - 1; j++) {
		wed_item[j] = wed_array[j].split("\t");
	}
	for (var i = 0; i < wed_item.length; i++) {
		AddItemArray.push(wed_item[i][1]);
		AddContentArray.push(wed_item[i][3]);
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Wed_test").appendChild(div);
		div.setAttribute("class", "test_Wed");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");

		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = "AWed";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		count++;
	}

	$.ajax({
		url : "saved/AThu.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data, status, xhr) {
			thu_string = data;
			// console.log(mon_string);
		}
	});
	thu_array = thu_string.split("\n");
	for (var j = 0; j < thu_array.length - 1; j++) {
		thu_item[j] = thu_array[j].split("\t");
	}
	for (var i = 0; i < thu_item.length; i++) {
		AddItemArray.push(thu_item[i][1]);
		AddContentArray.push(thu_item[i][3]);
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Thu_test").appendChild(div);
		div.setAttribute("class", "test_Thu");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");

		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = "AThu";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		count++;
	}

	$.ajax({
		url : "saved/AFri.txt",
		dataType : "text",
		timeout : 30000,
		async : false,
		success : function(data, status, xhr) {
			fri_string = data;
			// console.log(mon_string);
		}
	});
	fri_array = fri_string.split("\n");
	for (var j = 0; j < fri_array.length - 1; j++) {
		fri_item[j] = fri_array[j].split("\t");
	}
	for (var i = 0; i < fri_item.length; i++) {
		AddItemArray.push(fri_item[i][1]);
		AddContentArray.push(fri_item[i][3]);
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Fri_test").appendChild(div);
		div.setAttribute("class", "test_Fri");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = "AFri";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
				$('#Edit_Add_Cont_Btn').click(function(event) {
					var newItem = $('#Edit_Add_Cont_Item').val();
					var newContent = $('#Edit_Add_Cont_Content').val();
					console.log(day);
					console.log(index);
					console.log(oldItem);
					console.log(oldContent);
					$.ajax({
						type : "POST",
						url : "./item-edit.jsp",
						data : {
							"day" : day,
							"oldTitle" : oldItem,
							"oldContent" : oldContent,
							"newTitle" : newItem,
							"newContent" : newContent
						},
						success : function(xml) {
							console.log(xml);
						},
						error : function(xhr, status, error) {
							alert(error);
						}
					});
				});
			}
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		count++;
	}
}
$('#Del_Btn')
		.click(
				function() {
					for (var i = 1; i < 10; i += 2) {
						for (var j = 0; j < main1.children[i].children[1].children[0].children.length; j++) {
							if (main1.children[i].children[1].children[0].childNodes[j].childNodes[0].childNodes[0].checked) {
								var delDay = main1.children[i].children[1].children[0]
										.getAttribute("id");
								console.log(i);
								console.log(delDay);
								console.log(typeof (delDay));
								var delItem = main1.children[i].children[1].children[0].children[j].childNodes[1].textContent;
								var delContent = main1.children[i].children[1].children[0].children[j].childNodes[2].childNodes[0].textContent
								index = AddItemArray
										.indexOf(main1.children[i].children[1].children[0].children[j].childNodes[1].textContent);
								main1.children[i].children[1].children[0]
										.removeChild(main1.children[i].children[1].children[0].children[j]);
								AddItemArray.splice(index, 1);
								AddContentArray.splice(index, 1);
								j--;
								count--;
								console.log(delItem);
								console.log(delContent);

								$.ajax({
									type : "POST",
									url : "./item-delete.jsp",
									data : {
										"delDay" : delDay,
										"delItem" : delItem,
										"delContent" : delContent
									},
									success : function(hxml) {
										alert("??");
									},
									error : function(xhr, status, error) {
										alert("!!!");
									}
								});
							}
						}
					}
				});

// Add버튼 눌렀을때
addcBtn.onclick = function() {
	// value값을 배열안에 푸쉬했다.
	var item = document.getElementById("Add_Cont_Item").value;
	var content = document.getElementById("Add_Cont_Content").value;
	var AddDay = document.getElementById("Add_Cont_Day").value;
	AddItemArray.push(item);
	AddContentArray.push(content);
	modal.style.display = "none";

	switch (AddDay) {
	// 월요일
	case "AMon":
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");

		document.getElementById("Mon_test").appendChild(div);
		div.setAttribute("class", "test_Mon");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		checkbox.setAttribute("type", "checkbox");

		div.appendChild(div1);
		div1.appendChild(checkbox);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var x = event.target;
			onclickIndex = $(x).index();
			console.log(onclickIndex);
			var oldItem = x.parentNode.childNodes[onclickIndex].childNodes[1].textContent;
			var oldContent = x.parentNode.childNodes[onclickIndex].childNodes[2].textContent;
			var onclickDay = "AMon";
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = x.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = x.childNodes[2].textContent;
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		break;
	// 화요일
	case "ATue":
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Tue_test").appendChild(div);
		div.setAttribute("class", "test_Tue");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);

		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = AddDay;
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;
			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}

		break;
	// 수요일
	case "AWed":
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Wed_test").appendChild(div);
		div.setAttribute("class", "test_Wed");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");

		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = AddDay;
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		break;
	// 목요일
	case "AThu":
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Thu_test").appendChild(div);
		div.setAttribute("class", "test_Thu");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");

		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = AddDay;
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
			}
			$('#Edit_Add_Cont_Btn').click(function(event) {
				var newItem = $('#Edit_Add_Cont_Item').val();
				var newContent = $('#Edit_Add_Cont_Content').val();
				console.log(day);
				console.log(index);
				console.log(oldItem);
				console.log(oldContent);
				$.ajax({
					type : "POST",
					url : "./item-edit.jsp",
					data : {
						"day" : day,
						"oldTitle" : oldItem,
						"oldContent" : oldContent,
						"newTitle" : newItem,
						"newContent" : newContent
					},
					success : function(xml) {
						console.log(xml);
					},
					error : function(xhr, status, error) {
						alert(error);
					}
				});
			});
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		break;
	// 금요일
	case "AFri":
		var text = document.createTextNode(AddItemArray[count]);
		var content = document.createTextNode(AddContentArray[count]);
		var div = document.createElement("DIV");
		var div1 = document.createElement("P");
		var div2 = document.createElement("DIV");
		var p = document.createElement("P");
		var checkbox = document.createElement("INPUT");
		div1.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");

		document.getElementById("Fri_test").appendChild(div);
		div.setAttribute("class", "test_Fri");
		div1.setAttribute("class", "test1");
		p.setAttribute("class", "test2");
		div.appendChild(div1);
		div.appendChild(text);
		div.appendChild(p);
		p.appendChild(content);
		div.appendChild(div2);

		div.onclick = function() {
			var index = $(div).index();
			var oldItem = div.parentNode.childNodes[index].childNodes[1].textContent;
			var oldContent = div.parentNode.childNodes[index].childNodes[2].textContent;
			var day = AddDay;
			modal1.style.display = "block";
			document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
			document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

			document.getElementById("Edit_Add_Cont_Btn").onclick = function() {
				var index1 = AddItemArray
						.indexOf(div.childNodes[1].textContent);
				AddItemArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Item").value);
				AddContentArray.splice(index1, 1, document
						.getElementById("Edit_Add_Cont_Content").value);
				modal1.style.display = "none";
				div.childNodes[1].textContent = document
						.createTextNode(AddItemArray[index1]).textContent;
				div.childNodes[2].firstChild.textContent = document
						.createTextNode(AddContentArray[index1]).textContent;
				$('#Edit_Add_Cont_Btn').click(function(event) {
					var newItem = $('#Edit_Add_Cont_Item').val();
					var newContent = $('#Edit_Add_Cont_Content').val();
					console.log(day);
					console.log(index);
					console.log(oldItem);
					console.log(oldContent);
					$.ajax({
						type : "POST",
						url : "./item-edit.jsp",
						data : {
							"day" : day,
							"oldTitle" : oldItem,
							"oldContent" : oldContent,
							"newTitle" : newItem,
							"newContent" : newContent
						},
						success : function(xml) {
							console.log(xml);
						},
						error : function(xhr, status, error) {
							alert(error);
						}
					});
				});
			}
		}
		EditClose.onclick = function() {
			modal1.style.display = "none";
		}
		div1.onclick = function() {
			event.stopPropagation();
		}
		break;
	}
	count++;
}
function searchItem() {
	if (document.getElementById("search_day").value == "Everyday") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			if (document.getElementById("Mon_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Mon_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			if (document.getElementById("Tue_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Tue_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			if (document.getElementById("Wed_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Wed_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			if (document.getElementById("Thu_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Thu_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			if (document.getElementById("Fri_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Fri_test").childNodes[i].style.display = "none";
			}
		}
	}
	// 월요일
	else if (document.getElementById("search_day").value == "Mon") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			if (document.getElementById("Mon_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Mon_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			document.getElementById("Tue_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			document.getElementById("Wed_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			document.getElementById("Thu_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			document.getElementById("Fri_test").childNodes[i].style.display = "none";
		}
	}
	// 화요일
	else if (document.getElementById("search_day").value == "Tue") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			document.getElementById("Mon_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			if (document.getElementById("Tue_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Tue_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			document.getElementById("Wed_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			document.getElementById("Thu_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			document.getElementById("Fri_test").childNodes[i].style.display = "none";
		}
	}
	// 수요일
	else if (document.getElementById("search_day").value == "Wed") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			document.getElementById("Mon_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			document.getElementById("Tue_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			if (document.getElementById("Wed_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Wed_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			document.getElementById("Thu_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			document.getElementById("Fri_test").childNodes[i].style.display = "none";
		}
	}
	// 목요일
	else if (document.getElementById("search_day").value == "Thu") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			document.getElementById("Mon_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			document.getElementById("Tue_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			document.getElementById("Wed_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			if (document.getElementById("Thu_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Thu_test").childNodes[i].style.display = "none";
			}
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			document.getElementById("Fri_test").childNodes[i].style.display = "none";
		}
	}
	// 금요일
	else if (document.getElementById("search_day").value == "Fri") {
		for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
			document.getElementById("Mon_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
			document.getElementById("Tue_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
			document.getElementById("Wed_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
			document.getElementById("Thu_test").childNodes[i].style.display = "none";
		}
		for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
			if (document.getElementById("Fri_test").childNodes[i].childNodes[1].textContent != document
					.getElementById("search_item").value) {
				document.getElementById("Fri_test").childNodes[i].style.display = "none";
			}
		}
	}
}
function seachErase() {
	for (var i = 0; i < document.getElementById("Mon_test").childNodes.length; i++) {
		document.getElementById("Mon_test").childNodes[i].style.display = "block";
	}
	for (var i = 0; i < document.getElementById("Tue_test").childNodes.length; i++) {
		document.getElementById("Tue_test").childNodes[i].style.display = "block";
	}
	for (var i = 0; i < document.getElementById("Wed_test").childNodes.length; i++) {
		document.getElementById("Wed_test").childNodes[i].style.display = "block";
	}
	for (var i = 0; i < document.getElementById("Thu_test").childNodes.length; i++) {
		document.getElementById("Thu_test").childNodes[i].style.display = "block";
	}
	for (var i = 0; i < document.getElementById("Fri_test").childNodes.length; i++) {
		document.getElementById("Fri_test").childNodes[i].style.display = "block";
	}
}
$(document).ready(function() {
	$('#mainbar .divbar').sortable({
		connectWith : '#mainbar .divbar',
		start : function(event, ui) {
			var oldDay;
			console.log($(ui.item).parent().attr("id"));
		},
		stop : function(event, ui) {
			// 요일별 조건문.
			var newDay;
			var newTitle = $(ui.item).children().eq(0).text();
			var newContent = $(ui.item).children().eq(1).text();
			$(ui.item).each(function() {
				console.log($(ui.item).text());
			});
			console.log($(ui.item));
			console.log(newTitle);
			console.log(newContent);
			console.log($(ui.item).parent().attr("id"));
			if ($(ui.item).parent().attr("id") == "Mon_test") {
				$(ui.item).attr('class', 'test_Mon');
				newDay = "AMon";
			} else if ($(ui.item).parent().attr("id") == "Tue_test") {
				$(ui.item).attr('class', 'test_Tue');
				newDay = "ATue";
			} else if ($(ui.item).parent().attr("id") == "Wed_test") {
				$(ui.item).attr('class', 'test_Wed');
				newDay = "AWed";
			} else if ($(ui.item).parent().attr("id") == "Thu_test") {
				$(ui.item).attr('class', 'test_Thu');
				newDay = "AThu";
			} else if ($(ui.item).parent().attr("id") == "Fri_test") {
				$(ui.item).attr('class', 'test_Fri');
				newDay = "AFri";
			}
			var myIndex = $(ui.item).index();
			var myDay = $(ui.item).parent();
			$.ajax({
				type : "POST",
				url : "./DragNDrop.jsp",
				data : {
					"newDay" : newDay,
					"newTitle" : newTitle,
					"newContent" : newContent
				},
				success : function(xml) {
					console.log(xml);
				},
				error : function(xhr, status, error) {
					alert(error);
				}
			});
		}
	});
});
$('#Add_Cont_Btn').click(function() {
	var title = $('#Add_Cont_Item').val();
	var content = $('#Add_Cont_Content').val();
	var day = $('#Add_Cont_Day').val();
	console.log(title);
	console.log(content);
	$.ajax({
		type : "POST",
		url : "./item-store.jsp",
		data : {
			"title" : title,
			"content" : content,
			"day" : day
		},
		success : function(xml) {
			console.log(xml);
		},
		error : function(xhr, status, error) {
			alert(error);
		}
	});
});
