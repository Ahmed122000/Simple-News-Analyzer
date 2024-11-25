// Replace checkForName with a function that checks the URL
import { checkForUrl} from './urlChecker'
import { updateUI } from './UIFormatter';

const serverURL = 'http://localhost:8000/api'

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;    

    // Check if the URL is valid
    let correctUrl = checkForUrl(formText); 
    if(!correctUrl){
      alert("the input URL is not correct\nplease enter another valid URL");
      return 
    }

    try{

      // If the URL is valid, send it to the server using the serverURL constant above
      const response = await fetch(serverURL, {
        method:'POST', 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'url':formText})
      })
      
      if(!response.ok){
        alert("Failed to fetch data from the server. Please try again later.");
        return;
      }

      const data = await response.json()
      updateUI(data);

    } catch (error) {
      console.error("Error during the fetch process:", error);
      alert("An error occurred while processing your request. Please try again.");
    }
}

// Export the handleSubmit function
export { handleSubmit };

