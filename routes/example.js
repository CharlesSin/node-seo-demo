const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const siderItemList = [
    { name: "Dashboard", icon: "la-igloo", link: "./home/Dashboard" },
    { name: "Customers", icon: "la-users", link: "./home/Customers" },
    { name: "Projects", icon: "la-clipboard-list", link: "./home/Projects" },
    { name: "Orders", icon: "la-shopping-bag", link: "./home/Orders" },
    { name: "Inventory", icon: "la-receipt", link: "./home/Inventory" },
    { name: "Accounts", icon: "la-user-circle", link: "./home/Accounts" },
    { name: "Tasks", icon: "la-clipboard-list", link: "./home/Tasks" },
  ];

  const active = "DayNightMode";
  res.render("DayNightMode", { siderItemList, active });
});

module.exports = router;
