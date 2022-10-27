async function nameData(event) {
  try {
    let ele = document.getElementById('search').value;
    console.log(ele);
    // event.preventDefault()
    let data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${ele}&per_page=6`)
    let res = await data.json();
    console.log(res);
    document.querySelector('.data_area').innerHTML = '';
    for (var i = 0; i < res.length; i++) {
      let child = `<p class="items">city : ${res[i].city}</p>
         <p class="items">Name : ${res[i].name}</p>
        <p class="items">Type : ${res[i].brewery_type}</p>
        <p class="items">Address : ${res[i].street}</p>
        <p class="items" >Website : <a target="_blank" href="${res[i].website_url}">Check our Website</a></p>
        <p class="items">Phone : ${res[i].phone}</p>`;

      let contentdiv = document.createElement('div');
      contentdiv.setAttribute('class', 'content-parent');
      contentdiv.innerHTML = child;
      document.querySelector('.data_area').append(contentdiv);
    }
  } catch (error) {
    alert("Please Enter valid Name: New York,Los Angeles");
    console.log(error);
  }
}
nameData(Event);