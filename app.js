// write code here
// toggle navbar
const hambuger = document.getElementById("hambuger")
const navbar = document.getElementById("menu")

hambuger.addEventListener('click', () => {
    navbar.classList.toggle("hidden")
})

function colorChange() {
    hambuger.style.color = "white"

}



// api endpoints
// const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b59ecc8e3f24bdc800f1e087490230b';
// const techUrl = 'https://inshorts.deta.dev/news?category=technology'
const latestlUrl = "http://localhost:3000/latests"
const localUrl = "http://localhost:3000/locals"
const postsUrl = "http://localhost:3000/posts"

// varriables



// functions
function getLatest() {
    fetch(latestlUrl)
     .then((response) => response.json())
     .then(data => {
        let output = '';
        data.slice(0, 3).forEach(latest => {

            output += `
            <div class="md:flex justify-bewtween">
                <div class="bg-green-300 rounded-md mx-4 ">
                    <div class="">
                        <img class="rounded-t-lg" id="img-url" src="${latest.urlToImage}" alt="">
                    </div>
                    <div class="pt-2 pb-4 px-6 my-8">
                        <h3 class="text-xl font-semibold text-gray-800">${latest.title}</h3>
                        <h3 class="py-2 font-semibold text-green-800">${latest.author}, <span class="font-medium">${latest.name}</span></h3>
                        <p>${latest.description}</p>
                        <p class="mb-6">${latest.content}</p>
                        <a class="text-white bg-green-600 text-lg font-medium px-4 py-4 rounded-md" href="${latest.url}">
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
                    <div class="bg-green-300 rounded-md mx-4 ">
                        <div class="">
                            <img class="rounded-t-lg" id="img-url" src="${local.urlToImage}" alt="">
                        </div>
                        <div class="pt-2 pb-4 px-6 my-8">
                            <h3 class="text-xl font-semibold text-gray-800">${local.title}</h3>
                            <h3 class="py-2 font-semibold text-green-800">${local.author}, <span class="font-medium">${local.name}</span></h3>
                            <p>${local.description}</p>
                            <p class="mb-6">${local.content}</p>
                            <a class="text-white bg-green-600 text-lg font-medium px-4 py-4 rounded-md" href="${local.url}">
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


// post news
const form = document.getElementById("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();


    postNews();

    form.reset();

})

function postNews() {
    const postTitle = document.getElementById("post-title").value;
    const postContent = document.getElementById("post-content").value;
    const author = document.getElementById("author").value;

    fetch(postsUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: postTitle,
            name: author,
            body: postContent
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (postTitle !== "" && author !== "" && postContent !== "") {
                
                document.getElementById("public-posts").innerHTML += `
                    <div class="my-4 p-4 rounded-md border-2 border-gray-600">
                        <h2 class="text-xl text-gray-800 font-semibold">${postTitle}, 
                            <span class="my-2 text-base font-medium text-green-600">${author}</span>
                        </h2>
                        <p class="text-base">Content: ${postContent}</p>
                    </div>
                `
            } else {
                console.log("Please fill in the form!")
            }

            // form.reset();
        }) 

}



document.addEventListener("DOMContentLoaded", () => {
    getLatest();
    getLocal();


})












