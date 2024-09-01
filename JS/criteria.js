
// Judging Criteria
const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.pressed"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("pressed");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
  
      accordionItemHeader.classList.toggle("pressed");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("pressed")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });