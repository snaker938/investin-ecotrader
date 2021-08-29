"use strict";

const ecotrader = document.querySelector(".ecotrader-stock");
const tesla = document.querySelector(".tesla-stock");
const google = document.querySelector(".google-stock");

ecotrader.addEventListener("click", function (e) {
  window.location.href = "stocks/ecotrader-stock.html";
});

tesla.addEventListener("click", function (e) {
  window.location.href = "stocks/tesla-stock.html";
});

google.addEventListener("click", function (e) {
  window.location.href = "stocks/google-stock.html";
});

// Home Button :)
const home = document.querySelector(".home");

home.addEventListener("click", function () {
  window.location.href = window.origin + "/" + "investin-ecotrader/";
});
