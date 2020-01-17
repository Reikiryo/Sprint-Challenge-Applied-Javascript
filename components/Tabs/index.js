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
    let tabTest = str

    if (tabTest === 'node.js') {
        tabTest = 'node'
    }

    //adding classes
    tab.classList.add('tab')
    //text content 
    tab.textContent = str

    //event listener
    tab.addEventListener('click', () => {
        //getting all articles
        const articles = document.querySelectorAll('.card')
        //looping through articles
        articles.forEach(card => {
            //looping through the classes of each article
            // card.classList.forEach(clss => {
            //     //if the article has a class equal to the tab name then it remains
            //     //otherwise it goes
            //     //if the tab name is 'all' then all articles remain
            //     if (tabTest === 'all') {
            //         card.style.display = 'block'
            //     } else if (clss !== tabTest) {
            //         card.style.display = 'none'
            //     } else {
            //         card.style.display = 'block'
            //     }
            // })
            if (card.dataset.topic === 'all') {
                card.style.display = 'block'
            } else if (card.dataset.topic !== tabTest){
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }
        })
    })

    return tab
}

const topics = document.querySelector('.topics')

//getting server response and adding each response to a new tab
//each new tab is appended to the topics section in index.html
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        res.data.topics.forEach(topic => {
            topics.append(newTab(topic))
        })
    })
    .catch(err => {
        console.log(err)
    })

topics.append(newTab('all').dataset.topic = 'all')

