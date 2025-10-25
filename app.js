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


function loadProjects() {
	let container = document.querySelector('.container-body');
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

