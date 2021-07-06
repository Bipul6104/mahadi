let counters = document.querySelectorAll('.counter');
let time = 5000;

counters.forEach(counter => {
	let updateCount = () => {
		let target = +counter.getAttribute('data-target');
		let count = +counter.innerText;
		let increment = target / time;

		if(count < target){
			counter.innerText = Math.ceil(count + increment);
			setTimeout(updateCount,1);
		}
			else{counter.innerText = target;}
	};
			updateCount();
});




var typed = new Typed(".type", {
	strings: [
	"Mahadi Hasan",
	"a Designer",
	"a Freelancer"
	],
	typeSpeed:60,
	backSpeed:60,
	loop:true
}); 