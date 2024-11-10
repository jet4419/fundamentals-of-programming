const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
	
	const firstName = document.getElementById('first_name').value;
	const age = document.getElementById('age').value;
	const address = document.getElementById('address').value;

	console.log(firstName);
	console.log(age);
	console.log(address);

});