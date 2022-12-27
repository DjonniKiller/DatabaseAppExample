$(function () {
	$.ajax({
		url: 'https://localhost:100001/api/test/getUsers',
		success: (data) => {
			data.forEach(el => {
				$('#users').append(`<li>Логин: ${el.login}; Е-майл: ${el.email}</li>`);
			});
		}
	});
});
