let loc = 91206
let radius = 30



function getNewInfo(){
  $.getJSON(`http://api.jambase.com/events?zipCode=${loc}&radius=${radius}&api_key=3sr3rt37bp3fkej3z3mgyrm4`, function(data){
    // console.log(data.Events);
    buildEventInfo(data.Events)
  })
}


let form = document.querySelector('.input-wrapper');
form.onsubmit = function(e){
  e.preventDefault();
  if(e.target.location.value){
    loc = e.target.location.value;
  }
  if(e.target.distance.value){
    radius = e.target.distance.value;
  }

  $('#results-wrapper').empty();

  form.reset();
  getNewInfo();
}

// buildEventInfo(tempData)

function buildEventInfo(data){
  const eventInfoBoxWrapper = document.querySelector("#results-wrapper");
  // iterate through the object and add appropriate info
  data.forEach(info => {
    // resultInfo div
    const resultInfo = document.createElement("div");
    resultInfo.setAttribute("class", "resultInfo");
    // resultName
    const resultName = document.createElement("h2");
    resultName.setAttribute("class", "resultName");
    resultName.innerHTML = info.Artists[0].Name;
    // topContainer
    const topContainer = document.createElement("div");
    topContainer.setAttribute("class", "sideInfoBox row");
    // resultDate
    const resultDate = document.createElement("p");
    resultDate.setAttribute("class", "resultText");
    resultDate.innerHTML = formatDate(info.Date);
    // resultVenue
    const resultVenue = document.createElement("p");
    resultVenue.setAttribute("class", "resultText");
    resultVenue.innerHTML = info.Venue.Name;
    // bottomContainer
    const bottomContainer = document.createElement("div");
    bottomContainer.setAttribute("class", "sideInfoBox row");
    // resultCity
    const resultCity = document.createElement("p");
    resultCity.setAttribute("class", "resultText");
    resultCity.innerHTML = info.Venue.City;
    // resultLink
    const resultLink = document.createElement("a");
    resultLink.setAttribute("class", "resultText cursor");
    resultLink.setAttribute("href", info.TicketUrl);
    resultLink.setAttribute("target", "_blank");


    // resultLink.innerHTML = info.TicketUrl


    resultInfo.appendChild(resultName);
    resultInfo.appendChild(topContainer);
    topContainer.appendChild(resultVenue);
    topContainer.appendChild(resultCity);
    resultInfo.appendChild(bottomContainer);
    bottomContainer.appendChild(resultDate);
    // bottomContainer.appendChild(resultLink);
    resultLink.appendChild(resultInfo);
    eventInfoBoxWrapper.appendChild(resultLink);
  })
}

function formatDate(date) {
  let newDate = date.slice(0, 10).split("-")
  newDate = `${newDate[1]}/${newDate[2]}/${newDate[0]}`
  return newDate
}

getNewInfo();
