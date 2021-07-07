var data = {
	title: '',
	genre: '',
	country: '',
	language: '',
	sort: 'date',
	order: 'desc',
	page: 1
}

async function updateData() {
	data.title = document.getElementById('search').value;
	data.genre = '';
	data.country = '',
	data.language = '';
	data.sort = 'date';
	data.order = 'desc';
	data.page = 1;
	makeApiCall();
}

function buildTable(result){

}

async function makeApiCall() {
	$.ajax({
		url: '/api/search',
		type: 'GET',
		dataType: 'json',
		data: data,
	}).then(function (res) {
		console.log(res);
		return res;
	});
}