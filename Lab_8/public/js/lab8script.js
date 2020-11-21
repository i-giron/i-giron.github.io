
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                let random = getRandomInt(0, listSize);
                let post = json.data.children[random].data;
                console.log(post)

                let subreddit = post.subreddit;
                let author = post.author;
                let title = post.title;
                let ups = post.ups;

                let msg = "<b>Subreddit </b>: " + subreddit + 
                " <b>Author</b>:" + author + 
                " <b>Title</b>:" + title + 
                " <b>Up votes</b>: " + ups;

                let select = document.getElementById("redditList");
                select.innerHTML += "<li>" + msg + "</li>";
                /*
                    Get a random number within the size of the list
                    Get subreddit, author, title, and ups from record
                    Set the message to be:
                        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                    Add a new <li> element with the message to the 'redditList' element
                    Add a data entry to chartValues with author as the label and ups as the y component
                */
    

        
                
                let addToChart = {'label':author,y:ups}; // Gave this. This needs to be added to the 'chartValues'
        
                chartValues.push(addtoChart);
            }
        })
        .then(values => console.log(chartValues));
        chart.render();
        // Do you need to remove the comments from here in order to get it to work?
};

async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints:chartValues
            }
        ]
    });
    
    chart.render();
}

window.onload = makeChart;