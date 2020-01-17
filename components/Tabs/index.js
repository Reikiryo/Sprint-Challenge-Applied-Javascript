// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function newTab(str){
    //creating component peices
    const tab = document.createElement('div')
    //adding classes
    tab.classList.add('tab')
    //text content 
    tab.textContent = str

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