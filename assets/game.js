$(document).ready(function () {

    // array of objects
    let topics = 'hamburger, french fries, cheesesteak, fried chicken, hot wings, hotdog, tater tots, onion rings, chicken parmesean, pasta, mozzarella sticks'

    // Event listener for all button elements
    $("button").on("click"), function() {
    
            // setting variable for "this" keyword refers to the button clicked
        var food = $(this).attr("data-food");
    
            // Constructs a URL to search giphy for the name of the food in text on each button
            // created my own API key in the giphy app
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=OwHjCJ9HuO9XtDM00tRP3DpQISUs9yB1&limit=10";
    
            // Performs the AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
            
        })
            // after the data comes back from API, stores an array of results in the results variable
            .then(function(response) {
                console.log(queryURL);
                var results = response.data;
            
            // use a loop that appends a button for each string in the array
    
             for (let i = 0; i < results.length; i++) {
             
                if (results[i].rating !== "r" && results[i].rating !== "pg-13")
    
                // creates a div for the gif
                var gifDiv = $("<div>");
    
                // Creates a paragraph tag/image tag with the results item's rating
                var p = $("<p>").text("Rating: " + rating);
                var foodImage = $("<img>");
    
                // appends the paragraph tag and foodImage to "gifDiv"
                foodImage.attr("src", results[i].images.fixed_height.url);
    
                gifDiv.append(p);
                gifDiv.append(foodImage);
    
                $("#gifs-appear-here").prepend(gifDiv);
             }
    
        // create on click button -- page should grab 10 static, non-animated gif images from the giphy API then place on page -- should display or .text?
    
        // create on click for static giphy image to animate, if the user clicks again it should stop -- reset function?
    
    
        // display the rating of each gif (pg, g, pg-13), then move onto the next step
    
    
        // add a form to your page that takes a VALUE from the user input box and adds it to the topics array (HTML/JS)
    
    
        // make a function call that takes each topic in arry and remakes the buttons on the page -- displays new button
    
        // End of js document
        
    })
    }});