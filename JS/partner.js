const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('.section');
let activeSection = null;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const sectionId = `section${e.target.id.slice(-1)}`;
        const section = document.getElementById(sectionId);
        // Update button colors
        buttons.forEach(btn => {
            btn.style.color = 'white';

        });
        // Toggle the display of the clicked section
        if (activeSection === section) {
            if (section.style.display === 'block') {
                section.style.display = 'none'
                // e.target.style.color = 'white';

            } else {
                section.style.display = 'block'
                e.target.style.color = "#00D1A0";

                
            }
            // section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            // Hide all sections first
            sections.forEach(sec => {
                sec.style.display = 'none';
                    // e.target.style.color = 'white';

            });
            // Display only the selected section
            section.style.display = 'block';
            // e.target.style.color = "white";

        }

        // Update the active section
        activeSection = section.style.display === 'block' ? section : null;


    });
});