// write code here
// endpoints
// const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b59ecc8e3f24bdc800f1e087490230b';
// const techUrl = 'https://inshorts.deta.dev/news?category=technology'
const latestlUrl = "http://localhost:3000/latests"
const localUrl = "http://localhost:3000/locals"


// varriables



// functions
function getLatest() {
    fetch(latestlUrl)
     .then((response) => response.json())
     .then(data => {
        let output = '';
        data.forEach(latest => {

            output += `
                <div class="md:flex justify-bewtween">
                    <div class="bg-green-300 rounded-md mx-8 ">
                        <div class="w-1/2">
                            <img class="w-1/2 rounded-lg" id="img-url" src="${latest.urlToImage}" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800">${latest.title}</h3>
                            <h3>${latest.name}</h3>
                            <h4>${latest.author}</h4>
                            <p>${latest.description}</p>
                            <p>${latest.content}</p>
                            <a class="text-red-500 bg-green-400 text-sm font-medium" href="${latest.url}">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById("output").innerHTML = output;
        

     })
}


function getLocal() {
    fetch(localUrl)
        .then((response) => response.json())
        .then((data) => {
            let news = ''
            data.forEach(local => {
                
                news += `
                <div class="md:flex justify-bewtween">
                    <div class="bg-green-300 rounded-md mx-8 ">
                        <div class="w-1/2">
                            <img class="w-1/2 rounded-lg" id="img-url" src="${local.urlToImage}" alt="">
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800">${local.title}</h3>
                            <h3>${local.name}</h3>
                            <h4>${local.author}</h4>
                            <p>${local.description}</p>
                            <p>${local.content}</p>
                            <a class="text-red-500 bg-green-400 text-sm font-medium" href="${local.url}">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                `
            });
            document.getElementById("news").innerHTML = news;

        })

}


document.addEventListener("DOMContentLoaded", () => {
    getLatest();
    getLocal();


})












