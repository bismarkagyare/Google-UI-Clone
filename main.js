const searchInput = document.querySelector("#main-search");


searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});


function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j46i512j69i59j35i39j0i512l3j46i199i465i512j46i512j0i512.1006j0j15&sourceid=chrome&ie=UTF-8"
}