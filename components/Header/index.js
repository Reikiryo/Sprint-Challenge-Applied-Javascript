// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    //creating component pieces
    const header = document.createElement('div'),
    date = document.createElement('span')
    title = document.createElement('h1')
    time = document.createElement('span')
    //appending
    header.append(date)
    header.append(title)
    header.append(time)
    //classes
    header.classList.add('header')
    date.classList.add('data')
    time.classList.add('temp')
    //text content
    axios.get('http://worldclockapi.com/api/json/est/now')
        .then(res => {
            //getting date and time from api and applying it to textContent
            //also splitting the dateTime into date and time seperately using the .slice() method
            const newTime = res.data.currentDateTime.slice(11, 16)
            const newDate = res.data.currentDateTime.slice(0, -12)
            date.textContent = newDate
            time.textContent = newTime
        })
    title.textContent = 'Lambda Times'

    return header
}

//variable for Header component to append to
const headerContainer = document.querySelector('.header-container')
//appending
headerContainer.append(Header())