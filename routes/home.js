const express = require("express");
const router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   const siderItemList = [
//     { name: "Dashboard", icon: "la-igloo", link: "./Dashboard" },
//     { name: "Customers", icon: "la-users", link: "./Customers" },
//     { name: "Projects", icon: "la-clipboard-list", link: "./Projects" },
//     { name: "Orders", icon: "la-shopping-bag", link: "./Orders" },
//     { name: "Inventory", icon: "la-receipt", link: "./Inventory" },
//     { name: "Accounts", icon: "la-user-circle", link: "./Accounts" },
//     { name: "Tasks", icon: "la-clipboard-list", link: "./Tasks" },
//   ];

//   const active = "Dashboard";
//   res.render("home", { siderItemList, active });
// });

router.get("/:routerId", function (req, res, next) {
  let routerId = req.params?.routerId;

  const siderItemList = [
    { name: "Dashboard", icon: "la-igloo", link: "./Dashboard" },
    // { name: "Customers", icon: "la-users", link: "./Customers" },
    // { name: "Projects", icon: "la-clipboard-list", link: "./Projects" },
    // { name: "Orders", icon: "la-shopping-bag", link: "./Orders" },
    // { name: "Inventory", icon: "la-receipt", link: "./Inventory" },
    // { name: "Accounts", icon: "la-user-circle", link: "./Accounts" },
    // { name: "Tasks", icon: "la-clipboard-list", link: "./Tasks" },
    { name: "DayNightMode", icon: "la-moon", link: "./DayNightMode" },
  ];

  const active = routerId;
  const pageRender = routerId === "Dashboard" ? "home" : routerId;

  res.render(pageRender, { siderItemList, active });
});

module.exports = router;
