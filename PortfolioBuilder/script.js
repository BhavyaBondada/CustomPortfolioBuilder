function generatePortfolio() {
    const name = document.getElementById('name').value.trim();
    const about = document.getElementById('about').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const projects = document.getElementById('projects').value.trim();
    const photoInput = document.getElementById('photo');

    // Check for empty fields
    if (!name || !about || !skills || !projects || photoInput.files.length === 0) {
        alert("Please fill in all the fields and upload a photo before generating your portfolio.");
        return; // Stop the function if validation fails
    }

    const skillsArray = skills.split(',');
    const projectsArray = projects.split('\n');
    const preview = document.getElementById('portfolio-preview');

    const photoURL = URL.createObjectURL(photoInput.files[0]);

    preview.innerHTML = `
        <img src="${photoURL}" alt="Profile Photo">
        <h1>${name}</h1>
        <h2>About Me</h2>
        <p>${about}</p>
        <h2>Skills</h2>
        <ul>${skillsArray.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h2>Projects</h2>
        <ul>${projectsArray.map(project => `<li>${project.trim()}</li>`).join('')}</ul>
    `;
}
