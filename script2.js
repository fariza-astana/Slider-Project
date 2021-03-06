const imgDiv = document.querySelector('.part2-content2');
const img1 = 'url("images/image1.png")';
const img2 = 'url("images/image1.png")';
const img3 = 'url("images/image1.png")';

const refItem = document.querySelectorAll('.completed-projects_item');
const activeRef = 'active';

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');

let currTarget = 1;

const showSlider1 = () => {
	imgDiv.style.backgroundImage = img1;
	refItem.forEach(elem => elem.classList.remove(activeRef));
	refItem[0].classList.add(activeRef);
	
	city.innerText = 'Rostov-on-Don \n LCD admiral';
	area.innerText = '81 m2';
	time.innerText = '3.5 months';
};

const showSlider2 = () => {
	imgDiv.style.backgroundImage =img2;
	refItem.forEach(elem => elem.classList.remove(activeRef));
	refItem[1].classList.add(activeRef);
	
	city.innerText = 'Sochi \n Thieves';
	area.innerText = '105 m2';
	time.innerText = '4 months';
};

const showSlider3 = () => {
	imgDiv.style.backgroundImage = img3;
	refItem.forEach(elem => elem.classList.remove(activeRef));
	refItem[2].classList.add(activeRef);
	
	city.innerText = 'Rostov-on-Don \n Patriotic';
	area.innerText = '93 m2';
	time.innerText = '3 months';
};


refItem.forEach(elem => {
	elem.addEventListener('click', (event) => {
        event.preventDefault();
		if (e.target.id === 'one') {
			currTarget = 1;
			showSlider1();
		} else if (e.target.id === 'two') {
			currTarget = 2;
			showSlider2();
		} else if (e.target.id === 'three') {
			currTarget = 3;
			showSlider3();
		}
	});
});