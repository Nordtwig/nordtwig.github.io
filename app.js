var projects = [
	{
		name: "Project Metrotopia",
		description: "A dystopian cyberpunk heist planning simulator and tactical RPG.",
		url: "https://github.com/Nordtwig/metrotopia-combat",
		reel: [
			"images/splash_placeholder.png",
		]
	}
]

var about = [
	{
		name: "Noah",
		description: "31 years old, living in Sweden. Making games and software in my spare time, when I'm not geeting or flexing puny muscles at the local gym.",
	}
]


function loadProjects() {
	let container = document.querySelector('.container-body');
	document.title = "👃 What am I doing?";
	container.innerHTML = '';
	projects.forEach(project => {
		let projectDiv = document.createElement('div');
		projectDiv.classList.add('project');
		let title = document.createElement('h2');
		title.textContent = project.name;
		let description = document.createElement('p');
		description.textContent = project.description;
		let link = document.createElement('a');
		link.target = "_blank";
		link.href = project.url;
		link.textContent = "View Project";
		let imagesDiv = document.createElement('div');
		imagesDiv.classList.add('project-images');
		if (project.reel && project.reel.length > 0) {
			project.reel.forEach(imageSrc => {
				let img = document.createElement('img');
				img.src = imageSrc;
				imagesDiv.appendChild(img);
			});
			projectDiv.appendChild(imagesDiv);
		}
		projectDiv.appendChild(title);
		projectDiv.appendChild(description);
		projectDiv.appendChild(link);
		container.appendChild(projectDiv);
	});
}

function loadAbout() {
	let container = document.querySelector('.container-body');
	document.title = "👃 Who am I?";
	container.innerHTML = ''; 
	about.forEach(person => {
		let personDiv = document.createElement('div');
		personDiv.classList.add('about-person');
		let name = document.createElement('h2');
		name.textContent = person.name;
		let description = document.createElement('p');
		description.textContent = person.description;
		personDiv.appendChild(name);
		personDiv.appendChild(description);
		container.appendChild(personDiv);
	}) 
}

