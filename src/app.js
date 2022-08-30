// write code here
// endpoints
// const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b59ecc8e3f24bdc800f1e087490230b';
// const techUrl = 'https://inshorts.deta.dev/news?category=technology'
const localUrl = "http://localhost:3000/articles"

// varriables
let articles = document.getElementById("articles")


// functions
function getArticles() {

    fetch(localUrl)
     .then((response) => response.json())
     .then(data => {
        let output = ''
        data.forEach(article => {

            output += `
                <div class="md:flex justify-bewtween">
                    <div class="bg-green-300 rounded-md mx-8 ">
                        <div class="w-1/2">
                            <img class="w-1/2 rounded-lg" id="img-url" src="${article.urlToImage}" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800">${article.title}</h3>
                            <li>${article.name}</li>
                            <li>${article.author}</li>
                            <li>${article.description}</li>
                            <a class="text-red-500 text-sm font-medium" href="${article.url}">
                                Read more
                            </a>
                            <li>${article.publishedAt}</li>
                            <p>${article.content}</p>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById("output").innerHTML = output;
        

     })
}




document.addEventListener("DOMContentLoaded", () => {
    getArticles()


})












