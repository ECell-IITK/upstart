
const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('.section');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const sectionId = `section${e.target.id.slice(-1)}`;
        console.log(sectionId);

        // Hide all sections first
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Display only the selected section
        document.getElementById(sectionId).style.display = 'block';
    });
});
