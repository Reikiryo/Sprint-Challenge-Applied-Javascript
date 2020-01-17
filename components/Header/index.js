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
        //temp = document.createElement('span')
        time = document.createElement('span')
        //appending
        header.append(date)
        header.append(title)
        header.append(time)
        //header.append(temp)
        //classes
        header.classList.add('header')
        date.classList.add('data')
        time.classList.add('temp')
        //temp.classList.add('temp')
        //text content
        axios.get('http://worldclockapi.com/api/json/est/now')
        .then(res => {
            //getting date from api and applying it date.textContent
            console.log(res)
            const newTime = res.data.currentDateTime.slice(11, 16)
            const newDate = res.data.currentDateTime.slice(0, -12)
            date.textContent = newDate
            time.textContent = newTime
        })
        title.textContent = 'Lambda Times'
        //temp.textContent = '98°'

        return header 
}

const headerContainer = document.querySelector('.header-container')

headerContainer.append(Header())