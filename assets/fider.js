var euCountries = ["AT","BE","BG","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"];

function setCurrency(symbol) {
  if (sessionStorage) {
    sessionStorage.setItem("currency", symbol);
  }
  $(".currency-js").html(symbol);
}

$(document).ready(function() {
  if (sessionStorage && sessionStorage.getItem("currency")) {
    $(".currency-js").html(sessionStorage.getItem("currency"));
  } else {
    $.getJSON("https://api.ipdata.co?api-key=20338489079a61375c8d9cab64ac49dff68d5f2a8b71214c88944949", function(data) {
      var isEU = euCountries.indexOf(data.country_code)
      setCurrency(isEU ? "€" : "$");
    }, "jsonp");
  }

  $("#site-burger").click(function() {
    $("#site-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  $("#sidebar-burger").click(function() {
    $("#sidebar-burger").toggleClass("is-active");
    $(".sidebar").toggleClass("is-active");
  });
});
