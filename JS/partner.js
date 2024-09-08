const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('.section');
let activeSection = null;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const sectionId = `section${e.target.id.slice(-1)}`;
        const section = document.getElementById(sectionId);

        // Toggle the display of the clicked section
        if (activeSection === section) {
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            // Hide all sections first
            sections.forEach(sec => {
                sec.style.display = 'none';
            });
            // Display only the selected section
            section.style.display = 'block';
        }

        // Update the active section
        activeSection = section.style.display === 'block' ? section : null;

        // Update button colors
        buttons.forEach(btn => {
            btn.style.color = 'white';
        });
        e.target.style.color = "#00D1A0";
    });
});