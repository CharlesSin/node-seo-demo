const express = require("express");
const router = express.Router();

const templateJson = require("./template.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  const siderItemList = templateJson.template;

  const active = templateJson.template[0].name;
  const cssstyle = templateJson.template[0].cssstyle;
  const metatag = templateJson.template[0].metatag;
  const templateview = templateJson.template[0].templateview;

  res.render("main", {
    title: active,
    siderItemList,
    active,
    cssstyle,
    metatag,
    templateview,
  });
});

router.get("/:routerId", function (req, res, next) {
  let routerId = req.params?.routerId;

  const siderItemList = templateJson.template;

  const active = routerId;

  const activeData = templateJson.template.filter(
    (template) => template.name === active
  );

  const cssstyle = activeData[0]?.cssstyle;
  const templateview = activeData[0]?.templateview;
  const metatag = activeData[0]?.metatag;

  res.render("template", {
    title: active,
    active,
    siderItemList,
    cssstyle,
    metatag,
    templateview,
  });
});


module.exports = router;
