let form = document.getElementById('github-form')  
let search = document.getElementById('search')    
form.addEventListener('submit',(event) => {      
    event.preventDefault()                       
    fetchUserDetails();                     
})
function fetchUserDetails() {
    fetch(`https://api.github.com/users/${search.value}`)      
    .then((res) => res.json())                                  
    .then(data =>                  
      {
        if (data.message) {                                 
            (displayUserDetails(data));
            }
            else {
             console.log("User details not found");                  
    }})
}
function displayUserDetails(data){
    let userList = document.getElementById('user-list')            
        userList.innerHTML = `                            
        <h3>Here is your Github User Profile</h3>               
        <img src="${data.avatar_url}">                 
        <p>Your Username is: ${data.login}</p> 
        <p> Hey ${data.login}, here are your repositories <a target="_blank" href="https://www.github.com/${search.value}?tab=repositories">Repositories</a>
       
        `
}



        
