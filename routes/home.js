const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const active = "Dashboard";
  const siderItemList = [
    { name: "Dashboard", icon: "la-igloo", link: "/home" },
    { name: "DayNightMode", icon: "la-moon", link: "/home/DayNightMode" },
  ];
  
  res.render("home", { siderItemList, active });
});

router.get("/:routerId", function (req, res, next) {
  let routerId = req.params?.routerId;

  const siderItemList = [
    { name: "Dashboard", icon: "la-igloo", link: "/home" },
    { name: "DayNightMode", icon: "la-moon", link: "/home/DayNightMode" },
  ];

  const active = routerId;
  const pageRender = routerId;

  res.render(pageRender, { siderItemList, active });
});

module.exports = router;
