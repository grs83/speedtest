const oArgs = {
  app_key: "vC6JjzFkLQqRMX39",
  location: "",
  when: "this week",
  category: "",
  keywords: "",
  within: "15",
  units: "mi",
  title: "",
  include: "tags,categories",
  image_sizes: ["block200", "large"],
  page_number: 1,
  page_size: 15,
  sort_order: "popularity"
}

EVDB.API.call("/events/search", oArgs, response => {
  // console.log(response);

  buildEventInfo(response);

  // console.log(response.events.event[0].title);
})

function buildEventInfo(data){
  const eventInfoBoxWrapper = document.querySelector("#results-wrapper");
  // iterate through the object and add appropriate info
  data.events.event.forEach(info => {
    // resultInfo div
    const resultInfo = document.createElement("div");
    resultInfo.setAttribute("class", "resultInfo");
    // resultImg
    const resultImg = document.createElement("img");
    resultImg.setAttribute("class", "resultImg");
    // sideInfoBox
    const sideInfoBox = document.createElement("div");
    sideInfoBox.setAttribute("class", "sideInfoBox");
    // resultLocation
    const resultLocation = document.createElement("p");
    resultLocation.setAttribute("class", "resultLocation column");
    // resultTitle
    const resultTitle = document.createElement("p");
    resultTitle.setAttribute("class", "resultTitle");
    resultTitle.innerHTML = info.title;

    resultInfo.appendChild(resultImg);
    resultInfo.appendChild(sideInfoBox);
    sideInfoBox.appendChild(resultLocation);
    sideInfoBox.appendChild(resultTitle);

    eventInfoBoxWrapper.appendChild(resultInfo);
  })
}

// fetch data

// div
  // title
  // description

// fetch("http://api.eventful.com/js/api/events/search", {
//  method: "POST",
//  body: JSON.stringify(oArgs),
//  headers: {
//    "Content-Type": "application/json; charset=utf-8"
//  }
// })
// .then((res) => res.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err))
