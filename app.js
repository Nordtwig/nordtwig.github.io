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
var techStack = [
	{
		name: "Unity",
		description: "Game Engine, using C# as main programming language. Used for Project Metrotopia.",
		url: "https://unity.com/",
		logo: "images/logos/unity_logo.png",
	},
	{
		name: "Godot",
		description: "Game Engine, using GDScript as main programming language.",
		url: "https://godotengine.org/",
		logo: "images/logos/godot_logo.png",
	},
	{
		name: "Blender",
		description: "3D Modelling and animation software.",
		url: "https://www.blender.org/",
		logo: "images/logos/blender_logo.png",
	},
	{
		name: "Audacity",
		description: "Audio recording and editing software.",
		url: "https://www.audacityteam.org/",
		logo: "images/logos/audacity_logo.png",
	},
	{
		name: "Visual Studio Code",
		description: "Code editor for various programming languages.",
		url: "https://code.visualstudio.com/",
		logo: "images/logos/code_logo.png",
	},
	{
		name: "GitHub",
		description: "Code hosting platform for version control and collaboration.",
		url: "https://github.com/",
		logo: "images/logos/github_logo.jpg",
	},
	{
		name: "Krita",
		description: "Digital painting and illustration software.",
		url: "https://krita.org/",
		logo: "images/logos/krita_logo.png",
	},
	{
		name: "Material Maker",
		description: "Procedural texture generation software.",
		url: "https://www.materialmaker.org/",
		logo: "images/logos/material_maker_logo.png",
	},
	{
		name: "Reaper",
		description: "Digital audio workstation for recording, editing, and mixing audio.",
		url: "https://www.reaper.fm/",
		logo: "images/logos/reaper_logo.png",
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
		let card = document.createElement('div');
		card.classList.add('container-card');
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
		card.appendChild(projectDiv);
		container.appendChild(card);
	});
}

function loadTechStack() {
	let container = document.querySelector('.container-body');
	document.title = "👃 How am I doing it?";
	container.innerHTML = '';
	techStack.forEach(tech => {
		let card = document.createElement('div');
		card.classList.add('container-card');
		let techDiv = document.createElement('div');
		techDiv.classList.add('tech-item');
		let logo = document.createElement('img');
		logo.src = tech.logo;
		logo.classList.add('tech-logo');
		let name = document.createElement('h2');
		name.textContent = tech.name;
		let description = document.createElement('p');
		description.textContent = tech.description;
		let link = document.createElement('a');
		link.target = "_blank";
		link.href = tech.url;
		link.textContent = "Learn More";
		techDiv.appendChild(logo);
		techDiv.appendChild(name);
		techDiv.appendChild(description);
		techDiv.appendChild(link);
		card.appendChild(techDiv);
		container.appendChild(card);
		let divider = document.createElement('div');
		divider.classList.add('container-divider');
		container.appendChild(divider);
	});
}

function loadAbout() {
	let container = document.querySelector('.container-body');
	document.title = "👃 Who am I?";
	container.innerHTML = ''; 
	about.forEach(person => {
		let card = document.createElement('div');
		card.classList.add('container-card');
		let personDiv = document.createElement('div');
		personDiv.classList.add('about-person');
		let name = document.createElement('h2');
		name.textContent = person.name;
		let description = document.createElement('p');
		description.textContent = person.description;
		personDiv.appendChild(name);
		personDiv.appendChild(description);
		card.appendChild(personDiv);
		container.appendChild(card);
	}) 
}

