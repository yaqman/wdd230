const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
var fluit_list;
var convert_fluit_list = {};

function getJSON() {
	return new Promise(
	resolve => {
		var req = new XMLHttpRequest();		  // XMLHttpRequest オブジェクトを生成する
		req.onreadystatechange = function () {		  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
				if (req.readyState == 4 && req.status == 200) { // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
					fluit_list = JSON.parse(req.responseText);		          // 取得した JSON ファイルの中身を表示
					resolve(fluit_list);
				}
			};
			req.open("GET", requestURL, false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
			req.send(null);					    // 実際にサーバーへリクエストを送信
			
		}
	);
}

async function initialise(){
	var test = await getJSON();
	
	if (fluit_list){
		const option1 = document.createElement('option');
		const option2 = document.createElement('option');
		const option3 = document.createElement('option');
		
		option1.value = '';
		option2.value = '';
		option3.value = '';
		
		option1.textContent = 'Choose Your Fruit';
		option2.textContent = 'Choose Your Fruit';
		option3.textContent = 'Choose Your Fruit';
		document.querySelector('select#one').appendChild(option1);
		document.querySelector('select#two').appendChild(option2);
		document.querySelector('select#three').appendChild(option3);
		
		fluit_list.forEach(
			function (ele,i) {
				
				// セレクト作成
				const option1 = document.createElement('option');
				const option2 = document.createElement('option');
				const option3 = document.createElement('option');
				
				option1.value = ele.id;
				option2.value = ele.id;
				option3.value = ele.id;
				
				option1.textContent = ele.name;
				option2.textContent = ele.name;
				option3.textContent = ele.name;
				document.querySelector('select#one').appendChild(option1);
				document.querySelector('select#two').appendChild(option2);
				document.querySelector('select#three').appendChild(option3);
				
				
				convert_fluit_list[ele.id] = ele;
			}
		);
	}
}

initialise();

document.querySelector('#submitBtn').addEventListener('click', function (event) {
	
	const card = document.createElement('div');
	card.classList.add('card');
	
	const title = document.createElement('div');
	title.classList.add('title');
	title.innerHTML = 'Your Order Informati';
	// title.style.textAlign = 'center';
	card.appendChild(title);
	
	const table = document.createElement('table');
	const tbody = document.createElement('tbody');
	
	var doms = document.querySelectorAll('.Form input,.Form textarea,.Form select');
	var fluits = [];
	if (doms.length > 0){
		doms.forEach(function (ele,i) {
			const tr = document.createElement('tr');
			
			const th = document.createElement('th');
			if (ele.id == 'name'){
				th.innerHTML = 'Name';
			}else if (ele.id == 'tel'){
				th.innerHTML = 'Phone';
			}else if (ele.id == 'email1'){
				th.innerHTML = 'Email';
			}else if (ele.id == 'one'){
				th.innerHTML = 'Fruit#1';
			}else if (ele.id == 'two'){
				th.innerHTML = 'Fruit#2';
			}else if (ele.id == 'three'){
				th.innerHTML = 'Fruit#3';
			}else if (ele.id == 'other'){
				th.innerHTML = 'Special Instructions';
			}
			tr.appendChild(th);
			
			
			const td = document.createElement('td');
			
			if (ele.tagName == 'INPUT' || ele.tagName == 'TEXTAREA') {
				td.innerHTML = ele.value;
			}else if (ele.tagName == 'SELECT') {
				const num = ele.selectedIndex;
				if (ele.options[num].value){
					td.innerHTML = ele.options[num].textContent;
					
					fluits.push(convert_fluit_list[ele.value]);
				}
			}
			
			ele.value = '';
			tr.appendChild(td);
			tbody.appendChild(tr);
		});
		
		if (fluits){
			var total_carbs = new Decimal(0.0);
			var total_protein = new Decimal(0.0);
			var total_fat = new Decimal(0.0);
			var total_sugar = new Decimal(0.0);
			fluits.forEach(function (ele,i) {
				total_carbs = total_carbs.plus(ele.nutritions.carbohydrates);
				total_protein = total_protein.plus(ele.nutritions.protein);
				total_fat = total_fat.plus(ele.nutritions.fat);
				total_sugar = total_sugar.plus(ele.nutritions.sugar);
				
			});
			
			const total_carbs_tr = document.createElement('tr');
			const total_carbs_th = document.createElement('th');
			total_carbs_th.innerHTML = 'Total Carbs';
			total_carbs_tr.appendChild(total_carbs_th);
			const total_carbs_td = document.createElement('td');
			total_carbs_td.innerHTML = total_carbs + ' grams';
			total_carbs_tr.appendChild(total_carbs_td);
			tbody.appendChild(total_carbs_tr);
			
			const total_protein_tr = document.createElement('tr');
			const total_protein_th = document.createElement('th');
			total_protein_th.innerHTML = 'Total Protein';
			total_protein_tr.appendChild(total_protein_th);
			const total_protein_td = document.createElement('td');
			total_protein_td.innerHTML = total_protein + ' grams';
			total_protein_tr.appendChild(total_protein_td);
			tbody.appendChild(total_protein_tr);
			
			const total_fat_tr = document.createElement('tr');
			const total_fat_th = document.createElement('th');
			total_fat_th.innerHTML = 'Total Fat';
			total_fat_tr.appendChild(total_fat_th);
			const total_fat_td = document.createElement('td');
			total_fat_td.innerHTML = total_fat + ' grams';
			total_fat_tr.appendChild(total_fat_td);
			tbody.appendChild(total_fat_tr);
			
			const total_sugar_tr = document.createElement('tr');
			const total_sugar_th = document.createElement('th');
			total_sugar_th.innerHTML = 'Total Sugar';
			total_sugar_tr.appendChild(total_sugar_th);
			const total_sugar_td = document.createElement('td');
			total_sugar_td.innerHTML = total_sugar + ' grams';
			total_sugar_tr.appendChild(total_sugar_td);
			tbody.appendChild(total_sugar_tr);
			
			
			
		}
		console.log(fluits);
		
		
	}
	
	table.appendChild(tbody);
	card.appendChild(table);
	document.querySelector('.Form').appendChild(card);
	
});
