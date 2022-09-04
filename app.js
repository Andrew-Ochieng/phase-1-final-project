// write code here
// toggle navbar
const hambuger = document.getElementById("hambuger")
const navbar = document.getElementById("menu")
const times = document.getElementById("times")

hambuger.addEventListener('click', () => {
    navbar.classList.toggle("hidden")

})

function changeDisplay() {
    hambuger.style.display = "none"
    times.style.display = "flex"
}

function toggleMenu() {
    navbar.classList.toggle("hidden")
    times.style.display = "none"
    hambuger.style.display = "flex"
    
}



// api endpoints
const latestlUrl = "https://nameless-reef-64152.herokuapp.com/latests"
const localUrl = "https://nameless-reef-64152.herokuapp.com/locals"
const regionalUrl = "https://nameless-reef-64152.herokuapp.com/regionals"
const intUrl = "https://nameless-reef-64152.herokuapp.com/internationals"
const postsUrl = "https://nameless-reef-64152.herokuapp.com/posts"

// varriables



// functions
function getLatest() {
    fetch(latestlUrl)
     .then((response) => response.json())
     .then(data => {
        let output = '';
        data.slice(0, 1).forEach(latest => {

            output += `
            <div class="md:flex justify-bewtween">
                <div class="relative shadow-lg hover:shadow-xl hover:scale-95 hover:translate-2 hover:transform duration-500 text-center">
                    <img class="rounded-lg " src="${latest.urlToImage}" alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <a class="md:text-4xl text-3xl text-white font-bold tracking-wide cursor-pointer hover:text-gray-100 href="${latest.url}">${latest.title}</a>
                        <p class="md:text-2xl text-lg font-medium mb-2">${latest.description}</p>
                        <h3 class="text-lg py-2 font-semibold text-green-200">${latest.author}, <span class="font-medium">${latest.name}</span></h3>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById("output").innerHTML = output;
        

     })
}

// display local news
function getLocal() {
    fetch(localUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let news = ''
            data.slice(0, 3).forEach(local => {
                
                news += `
                <div class="md:flex justify-bewtween">
                    <div class="bg-green-300 hover:bg-green-400 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:translate-x-2 hover:transform duration-500">
                        <div class="">
                            <img class="rounded-t-lg" id="img-url" src="${local.image_url}" alt="">
                        </div>
                        <div class="pt-2 pb-4 px-6 my-8">
                            <h3 class="text-xl font-semibold text-gray-800">${local.title}</h3>
                            <p>${local.description}</p>
                            <h3 class="py-2 font-semibold text-green-800" href="${local.source_url}">By ${local.source_name}</h3>
                        </div>
                    </div>
                </div>
                `
            });

            document.getElementById("local-news").innerHTML = news;

        })

}


// display regional news
function getRegional() {
    fetch(regionalUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let region = ''
            data.slice(0, 3).forEach(regional => {
                
                region += `
                    <div class="md:flex justify-bewtween">
                        <div class="bg-green-300 rounded-md mx-4 ">
                            <div class="">
                                <img class="rounded-t-lg" id="img-url" src="${regional.urlToImage}" alt="">
                            </div>
                            <div class="pt-2 pb-4 px-6 my-8">
                                <h3 class="text-xl font-semibold text-gray-800">${regional.title}</h3>
                                <h3 class="py-2 font-semibold text-green-800">${regional.author}, <span class="font-medium">${regional.name}</span></h3>
                                <p class="mb-4">${regional.description}</p>
                                <a class="text-white bg-green-600 text-lg font-medium px-4 py-4 mt-2 rounded-md" href="${regional.url}">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                `
            });
            document.getElementById("regional-news").innerHTML = region;

        })

}


// display international
function getRegional() {
    fetch(intUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            let inter = ''
            data.slice(0, 3).forEach(international => {
                
                inter += `
                    <div class="md:flex justify-bewtween">
                        <div class="bg-green-300 rounded-md mx-4 ">
                            <div class="">
                                <img class="rounded-t-lg" id="img-url" src="${international.urlToImage}" alt="">
                            </div>
                            <div class="pt-2 pb-4 px-6 my-8">
                                <h3 class="text-xl font-semibold text-gray-800">${international.title}</h3>
                                <h3 class="py-2 font-semibold text-green-800">${international.author}, <span class="font-medium">${international.name}</span></h3>
                                <p class="mb-4">${international.description}</p>
                            </div>
                        </div>
                    </div>
                `
            });
            document.getElementById("international-news").innerHTML = inter;

        })

}



// post news
const form = document.getElementById("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();


    postOpinion();

    form.reset();

})

function postOpinion() {
    const postTitle = document.getElementById("post-title").value;
    const postContent = document.getElementById("post-content").value;
    const author = document.getElementById("author").value;
    const image = document.getElementById("image").value;

    fetch(postsUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: postTitle,
            name: author,
            image: image,
            body: postContent
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (postTitle !== "" && author !== "" && image !== "" && postContent !== "") {
                
                let showOpinion = document.getElementById("public-opinion")
                showOpinion.innerHTML += `
                    <div class="my-4 p-4 rounded-md border-2 border-gray-600">
                        <img src="${image}" alt="Public Opinion Image Here">
                        <h2 class="text-xl text-gray-800 font-semibold">${postTitle}, 
                            <span class="my-2 text-base font-medium text-green-600">${author}</span>
                        </h2>
                    
                        <p class="text-base text-gray-800">${postContent}</p>
                    </div>
                `
            } else {
                console.log("Please fill in the form!")
            }

        }) 

}



document.addEventListener("DOMContentLoaded", () => {
    getLatest();

    getRegional();

    getInternational();

    getLocal();


})












