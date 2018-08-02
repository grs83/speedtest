

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
  console.log(response);
})
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

