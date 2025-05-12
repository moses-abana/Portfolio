// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Skills data
const skills = [
    { name: 'Php', icon: 'fab fa-php', color: 'text-blue-600' },
    { name: 'C/C++', icon: 'fas fa-terminal', color: 'text-blue-600' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-black-400' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-gray-500' }
];

// Projects data
const projects = [
    { 
        title: 'Online Quiz', 
        description: 'A full-stack web app that allows: upload multi-exam questions, set time to spent on a question and automatic scoring ', 
        tags: ['HTML/CSS3', 'JavaScript','PHP', 'MySQL'], 
        image: 'images/project1.jpg',
        link: '#'
    },
    { 
        title: 'TIC-TAC-TOE', 
        description: "A two player Tic-tac-toe game, with an indicator show who's turn(in green). It also have pause and reset functionality, implemented using javascript.", 
        tags: ['HTML5', 'CSS3', 'JavaScript'], 
        image: 'images/project2.jpg',
        link: '#'
    },
    { 
        title: 'Currency Converter', 
        description: 'A Swing frame GUI app, that convert NGN input to USD.', 
        tags: ['Java'], 
        image: 'images/project3.jpg',
        link: '#'
    },
    { 
        title: 'Portfolio Website', 
        description: 'A clean, modern portfolio website to showcase my work.', 
        tags: ['HTML', 'TailwindCSS', 'JavaScript'], 
        image: 'images/project1.jpg',
        link: '#'
    },
    { 
        title: 'Student Record Analysis', 
        description: 'A script that that can sort students base on; highest score, longest names.', 
        tags: ['Python'], 
        image: 'images/project2.jpg',
        link: '#'
    }
    
];

// Populate skills on homepage
if (document.getElementById('skills-container')) {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition';
        skillElement.innerHTML = `
            <i class="${skill.icon} ${skill.color} text-4xl mb-3"></i>
            <h3 class="font-medium text-lg">${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Populate featured projects on homepage
if (document.getElementById('featured-projects')) {
    const projectsContainer = document.getElementById('featured-projects');
    projects.slice(0, 3).forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card bg-white rounded-lg overflow-hidden shadow-sm';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="font-bold text-xl mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 text-sm rounded-full">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="text-blue-600 font-medium hover:text-blue-700">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Populate all projects on projects page
if (document.getElementById('projects-container')) {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card bg-white rounded-lg overflow-hidden shadow-sm';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="font-bold text-xl mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 text-sm rounded-full">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="text-blue-600 font-medium hover:text-blue-700">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Contact form submission
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real app, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}