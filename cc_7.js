//Use form input and DOM API to 
//dynamically update CTA (AKA Call To Action) based on user input
//COMPLETE

//event listener to pull inputs from CTA form.
document.getElementById("CTAForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    //assigns the input to constant text.
    const text = document.getElementById("newCTAText").value;

    //Update the CTA button with new text
    document.getElementById("heroButton").innerHTML = text;
});