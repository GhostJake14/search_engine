var data = {
	title: '',
	genre: '',
	country: '',
	language: '',
	sort: 'date',
	order: 'desc',
	page: 1
}
var languages = ["Abkhazian", "Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Bambara", "Bashkir", "Basque", "Belarusian", "Bengali", "Bihari languages", "Bislama", "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan, Valencian", "Central Khmer", "Chamorro", "Chechen", "Chichewa, Chewa, Nyanja", "Chinese", "Church Slavonic, Old Bulgarian, Old Church Slavonic", "Chuvash", "Cornish", "Corsican", "Cree", "Croatian", "Czech", "Danish", "Divehi, Dhivehi, Maldivian", "Dutch, Flemish", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Finnish", "French", "Fulah", "Gaelic, Scottish Gaelic", "Galician", "Ganda", "Georgian", "German", "Gikuyu, Kikuyu", "Greek (Modern)", "Greenlandic, Kalaallisut", "Guarani", "Gujarati", "Haitian, Haitian Creole", "Hausa", "Hebrew", "Herero", "Hindi", "Hiri Motu", "Hungarian", "Icelandic", "Ido", "Igbo", "Indonesian", "Interlingua (International Auxiliary Language Association)", "Interlingue", "Inuktitut", "Inupiaq", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kanuri", "Kashmiri", "Kazakh", "Kinyarwanda", "Komi", "Kongo", "Korean", "Kwanyama, Kuanyama", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Letzeburgesch, Luxembourgish", "Limburgish, Limburgan, Limburger", "Lingala", "Lithuanian", "Luba-Katanga", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Manx", "Maori", "Marathi", "Marshallese", "Moldovan, Moldavian, Romanian", "Mongolian", "Nauru", "Navajo, Navaho", "Northern Ndebele", "Ndonga", "Nepali", "Northern Sami", "Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk", "Nuosu, Sichuan Yi", "Occitan (post 1500)", "Ojibwa", "Oriya", "Oromo", "Ossetian, Ossetic", "Pali", "Panjabi, Punjabi", "Pashto, Pushto", "Persian", "Polish", "Portuguese", "Quechua", "Romansh", "Rundi", "Russian", "Samoan", "Sango", "Sanskrit", "Sardinian", "Serbian", "Shona", "Sindhi", "Sinhala, Sinhalese", "Slovak", "Slovenian", "Somali", "Sotho, Southern", "South Ndebele", "Spanish, Castilian", "Sundanese", "Swahili", "Swati", "Swedish", "Tagalog", "Tahitian", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tonga (Tonga Islands)", "Tsonga", "Tswana", "Turkish", "Turkmen", "Twi", "Uighur, Uyghur", "Ukrainian", "Urdu", "Uzbek", "Venda", "Vietnamese", "Volap_k", "Walloon", "Welsh", "Western Frisian", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang, Chuang", "Zulu"];
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
var genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short Film", "Sport", "Superhero", "Thriller", "War", "Western"];
var totalPages;
var currentPage = 1;

function searchData() {
	data.title = document.getElementById('search').value;
	makeApiCall(0);
}

function makeApiCall(f) {
	data.page = currentPage;
	$.ajax({
		url: '/api/search',
		type: 'GET',
		dataType: 'json',
		data: data,
	}).then(function (res) {
		buildTable(res, f)
	});
}

function buildTable(res, f) {
	var str = '';
	var results = res.hits;
	var n = results.length;
	for (i = 0; i < n; i++) {
		var result = results[i]._source;
		var date;
		if (result.released_date.length != 4)
			date = result.released_date.slice(8,) + '/' + result.released_date.slice(5, 7) + '/' + result.released_date.slice(0, 4);
		else
			date = result.released_date;
		str += `<tr>
		<td>${20 * (data.page - 1) + i + 1}</td>
		<td>${result.title}</td>
		<td>${result.genre}</td>
		<td>${result.duration}</td>
		<td class="date">${date}</td>
		<td>${result.language}</td>
		<td>${result.country}</td>
		</tr>`;
	}
	document.getElementsByTagName('tbody')[0].innerHTML = str;
	if (n == 0) {
		document.getElementsByTagName('table')[0].classList.add('hide');
		document.getElementById('no-records').classList.remove('hide');
	}

	else {
		document.getElementsByTagName('table')[0].classList.remove('hide');
		document.getElementById('no-records').classList.add('hide');
	}
	if (f == 0)
		paginate(res.total.value);
}

function populateList() {
	var language = document.getElementById('language');
	var country = document.getElementById('country');
	var genre = document.getElementById('genre');
	for (var i = 0; i < languages.length; i++) {
		var opt = languages[i];
		var e = document.createElement("option");
		e.textContent = opt;
		e.value = opt;
		language.appendChild(e);
	}
	for (var i = 0; i < countries.length; i++) {
		var opt = countries[i];
		var e = document.createElement("option");
		e.textContent = opt;
		e.value = opt;
		country.appendChild(e);
	}
	for (var i = 0; i < genres.length; i++) {
		var opt = genres[i];
		var e = document.createElement("option");
		e.textContent = opt;
		e.value = opt;
		genre.appendChild(e);
	}
}

function filterCheck() {
	var e1 = document.getElementById('genre');
	var e2 = document.getElementById('language');
	var e3 = document.getElementById('country');
	if (e1.options[e1.selectedIndex].value == '' && e2.options[e2.selectedIndex].value == '' && e3.options[e3.selectedIndex].value == '')
		document.getElementById('clearFilter').classList.add('hide');
	else
		document.getElementById('clearFilter').classList.remove('hide');
	makeApiCall(0);
}

function clearFilters(e) {
	var e1 = document.getElementById('genre');
	var e2 = document.getElementById('language');
	var e3 = document.getElementById('country');
	e1.selectedIndex = 0;
	e2.selectedIndex = 0;
	e3.selectedIndex = 0;
	data.genre = '';
	data.country = '';
	data.language = '';
	e.classList.add('hide');
	makeApiCall(0);
}

function filterGenre() {
	var e = document.getElementById('genre');
	data.genre = e.options[e.selectedIndex].value;
	filterCheck();
}

function filterLanguage() {
	var e = document.getElementById('language');
	data.language = e.options[e.selectedIndex].value;
	filterCheck();
}

function filterCountry() {
	var e = document.getElementById('country');
	data.country = e.options[e.selectedIndex].value;
	filterCheck();
}

function sort(value, e) {
	var f = 0;
	if (value == 'duration' && data.sort != value) {
		f = 1;
		data.sort = value;
	}
	if (value == 'date' && data.sort != value) {
		f = 1;
		data.sort = value;
	}
	if (value == 'asc' && data.order != value) {
		f = 1;
		data.order = value;
	}
	if (value == 'desc' && data.order != value) {
		f = 1;
		data.order = value;
	}
	if (f == 1) {
		e.parentElement.getElementsByClassName('active')[0].classList.remove('active');
		e.classList.add('active');
		makeApiCall(0);
	}
}

function paginate(n) {
	var str = '';
	if (n > 100)
		totalPages = 5;
	else
		totalPages = Math.ceil(n / 20);
	currentPage = 1;
	if (totalPages > 1) {
		str += `<li class="disabled"><a href="javascript:void(0)" onclick="prev()">«</a></li>
	<li class="active"><a href="javascript:void(0)" onclick="selectedPage(this,1)">1</a></li>
	<li><a href="javascript:void(0)" onclick="selectedPage(this,2)">2</a></li>`;
		for (i = 3; i <= totalPages; i++)
			str += `<li><a href="javascript:void(0)" onclick="selectedPage(this,${i})">${i}</a></li>`;
		str += `<li><a href="javascript:void(0)" onclick="next()">»</a></li>`;
	}
	document.getElementById('pagination').innerHTML = str;
}

function selectedPage(e, current) {
	if (currentPage != current) {
		currentPage = current;
		var e1 = document.getElementById('pagination');
		e1.getElementsByClassName('active')[0].classList.remove('active');
		e.parentElement.classList.add('active');
		if (currentPage == 1)
			e1.firstChild.classList.add('disabled');
		else
			e1.firstChild.classList.remove('disabled');
		if (currentPage == totalPages)
			e1.lastChild.classList.add('disabled');
		else
			e1.lastChild.classList.remove('disabled');
		makeApiCall(1);
	}
}

function prev() {
	if (currentPage != 1) {
		var e = document.getElementById('pagination');
		if (currentPage == totalPages)
			e.lastChild.classList.remove('disabled');
		currentPage -= 1;
		e.getElementsByClassName('active')[0].classList.remove('active');
		e.getElementsByTagName('li')[currentPage].classList.add('active');
		if (currentPage == 1)
			e.firstChild.classList.add('disabled');
		else
			e.firstChild.classList.remove('disabled');
		makeApiCall(1);
	}
}

function next() {
	if (currentPage != totalPages) {
		var e = document.getElementById('pagination');
		if (currentPage == 1)
			e.firstChild.classList.remove('disabled');
		currentPage += 1;
		e.getElementsByClassName('active')[0].classList.remove('active');
		e.getElementsByTagName('li')[currentPage].classList.add('active');
		if (currentPage == totalPages)
			e.lastChild.classList.add('disabled');
		else
			e.lastChild.classList.remove('disabled');
		makeApiCall(1);
	}
}