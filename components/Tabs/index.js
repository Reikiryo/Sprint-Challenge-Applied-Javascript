// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function newTab(str) {
    //creating component peices
    const tab = document.createElement('div')
    let data = str

    //changing node.js to node because the topic in the data is node
    if (data === 'node.js') {
        data = 'node'
    }
    //creating new dataset for topic name
    tab.dataset.topic = data

    //adding classes
    tab.classList.add('tab')
    //text content 
    tab.textContent = str

    //event listener
    tab.addEventListener('click', () => {
        //getting all articles
        const articles = document.querySelectorAll('.card')
        //looping through all articles to find the ones that match the clicked tab
        articles.forEach(card => {
            //if article is equal to 'all then display all articles as 'block
            if (tab.dataset.topic === 'all') {
                card.style.display = 'block'
            //else if the article is not equal to the topic at hand then don't display it
            } else if (card.dataset.topic !== tab.dataset.topic){ 
                card.style.display = 'none'
            //otherwise display the article
            } else {
                card.style.display = 'block'
            }
        })
    })

    return tab
}

//creating a variable of the div in the html that the articles need to be appended to
const topics = document.querySelector('.topics')

//getting server response and adding each response to a new tab
//each new tab is appended to the topics section in index.html
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        //getting server response and adding each response to a new tab
        res.data.topics.forEach(topic => {
        //each new tab is appended to the topics section in index.html
        topics.append(newTab(topic))
        })
    })
    .catch(err => {
        console.log(err)
    })

//creating new All tab for all articles
const all = newTab('all')
//appending all tab to topics section
topics.append(all)

