// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function newCard(obj) {
    //creating component peices
    const card = document.createElement('div'),
    headline = document.createElement('div')
    author = document.createElement('div')
    imgDiv = document.createElement('div')
    img = document.createElement('img')
    authorName = document.createElement('span')
    //appending to card
    card.append(headline)
    card.append(author)
    //appending to author
    author.append(imgDiv)
    author.append(authorName)
    //appending to imgDiv
    imgDiv.append(img)
    //classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgDiv.classList.add('img-container')
    //text content
    headline.textContent = obj.headline
    authorName.textContent = obj.authorName
    //img src
    img.src = obj.authorPhoto

    return card
}

const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        //creating an array of all article keys
        console.log(res.data)
        const keys = Object.keys(res.data.articles)
        //looping through keys
        for (let i = 0; i < keys.length; i++) {
            //capturing current key in a variable
            const current = res.data.articles[keys[i]]
            //looping through all articles in each topic
            current.forEach(article => {
                //creating a new card for each article
                const newArticle = newCard(article)
                //giving the articles new data equal to the topic they're found under
                newArticle.setAttribute('data','topic') 
                newArticle.dataset.topic = (keys[i])
                cardContainer.append(newArticle)
            })

        }
    })
    .catch(err => {
        console.log(err)
    })
