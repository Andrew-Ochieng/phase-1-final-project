// write code here
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b59ecc8e3f24bdc800f1e087490230b';


function getNews() {
    fetch(apiUrl)
    	.then(response => response.json())
    	.then((data) => 
            // console.log(data)
            document.getElementById("img-url").src = data.urlToImage;
            document.getElementById("news-title").innerText = data.title;
            document.getElementById("news-content").innerText = data.content;
            document.getElementById("author").innerText = data.author;
            document.getElementById("read-more").innerHTML = "Read More";
            
    
    
        )
    
    
    	// .catch(err => console.error(err));
    
    
}







document.addEventListener("DOMContentLoaded", () => {
    getNews()



})












