const express = require('express');
const router = express.Router();

var shopData = {
    shopName: "Drinks on Us",
    productCategories: ["Can", "Water", "Juice", "Coffee", "Tea"],
    shops: [
        {
            location: "Manchester",
            manager: "Cristiano Ronaldo",
            address: "7 Old Trafford"
        },
        {
            location: "London",
            manager: "Tom Hardy",
            address: "10 Liverpool St"
        },
        {
            location: "Edinburgh",
            manager: "J.K. Rowling",
            address: "2 Market Square"
        }
    ]
};


// Home page
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

// About page
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

// Search page
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    
    const email = req.body.email;
    
    const emailValid = email.includes("@") && email.includes(".");

    if (!emailValid) {
        res.send("Error: That is not a valid email address.");
        return;
    }
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!');  
}); 

router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData); 
});
router.post("/survey", (req, res) => {
  const data = {
    first: req.body.first || "",
    last: req.body.last || "",
    email: req.body.email || "",
    age: req.body.age || "",
    category: req.body.category || "",
    student: req.body.student ? "Yes" : "No"
  };
  res.render("survey_result.ejs", { shopName: shopData.shopName, data });
});


module.exports = router;
