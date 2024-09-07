
const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('.section');
let currentIndex = 0;
let slideInterval = setInterval(autoSlide, 2000); // Set an interval for auto-slide every 2 seconds
buttons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        buttons.forEach(button => {
            button.style.color = 'white';
        });
        e.target.style.color = "#00D1A0"
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

// Function to automatically slide the carousel
function autoSlide() {
    currentIndex = (currentIndex + 1) % sections.length; // Loop back to the first section after the last one
    showSection(currentIndex);
}

// Function to show the section corresponding to the current index
function showSection(index) {
    buttons.forEach(button => {
        button.style.color = 'white';
    });
    buttons[index].style.color = "#00D1A0";

    sections.forEach(section => {
        section.style.display = 'none';
    });
    sections[index].style.display = 'block';
}
showSection(currentIndex); // Show the first section initially
