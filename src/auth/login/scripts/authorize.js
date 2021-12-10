export function authorize(email, name) {
    //sets and fills to active user container in localStorage
	localStorage.setItem("activeUser", JSON.stringify({ email, name }));
    
    //navigates on landing page
	location.href = "../../landing/index.html";
}
