// write code here
// const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b59ecc8e3f24bdc800f1e087490230b';
const apiUrl = 'https://inshorts.deta.dev/news?category=technology'

function getNews() {
    fetch(apiUrl)
    	.then(response => response.json())
    	.then((data) => {
            // console.log(data)
            document.getElementById("img-url").src = data.imageUrl;
            document.getElementById("news-title").innerText = data.title;
            document.getElementById("news-content").innerText = data.content;
            document.getElementById("author").innerText = data.author;
            document.getElementById("read-more").innerHTML = "Read More";
            document.getElementById("read-more").href = data.readMoreUrl;


            // document.getElementById("news-title").innerText = data.title;

    
    
        })


        // {
        //     "author": "Pragya Swastik",
        //     "content": "American actor Aaron Paul, who portrayed Jesse Pinkman in 'Breaking Bad', revealed that he uses a 'credit card-sized dumb phone' that cannot store any apps and can only make calls and send texts. \"There's no camera or emailing,\" Paul said, adding that he's planning to buy a flip phone. \"I haven't owned a computer in over 10 years,\" he added.",
        //     "date": "15 Mar 2020,Sunday",
        //     "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/03_mar/15_sun/img_1584273701082_423.jpg",
        //     "readMoreUrl": "https://www.dailymail.co.uk/tvshowbiz/article-8111761/Breaking-Bad-star-Aaron-Paul-reveals-owned-computer-decade-prefers-FLIP-PHONE.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        //     "time": "06:17 pm",
        //     "title": "\nI use a 'dumb phone' that only makes calls & sends texts: 'Breaking Bad' actor\n",
        //     "url": "https://www.inshorts.com/en/news/i-use-a-dumb-phone-that-only-makes-calls-sends-texts-breaking-bad-actor-1584276455594"
        //   },
    
    
    	// .catch(err => console.error(err));
    
    
}







document.addEventListener("DOMContentLoaded", () => {
    getNews()



})












