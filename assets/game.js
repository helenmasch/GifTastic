$(document).ready(function () {

    // array of srrings
    let topics = ['hamburger', 'french fries', 'cheesesteak', 'fried chicken', 'hot wings', 'hot dog', 'tater tots', 'onion rings', 'chicken parmesean', 'pasta', 'mozzarella sticks']


    function displayButtons() {
        $("#buttonsDiv").empty();
        console.log(topics);
        for (let index = 0; index < topics.length; index++) {

            // creates a variable for the buttons
            var button = $("<button>");
            // creating the attribute 
            button.attr("data-food", topics[index]);
            button.attr("class", "imageBtn")
            // displaying the text on the buttons
            button.text(topics[index]);

            // selecting a div to put the dynamic button on the webpage
            $("#buttonsDiv").append(button)

        }
    }
    // calling the function
    displayButtons()
    $("#submitBtn").on("click", function(){
        var food = $("#food").val().trim();
          topics.push(food);
          displayButtons();
 })
console.log(document);
    // Event listener for all button elements
    $(document).on("click",".imageBtn", function () {

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
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                var results = response.data;

                // use a loop that appends a button for each string in the array
               $("#gifs-appear-here").empty()

                for (let i = 0; i < results.length; i++) {
                    var rating = results[i].rating 
                    if (rating !== "r" && rating !== "pg-13")

                        // creates a div for the gif
                        var foodDiv = $("<div>");

                    // Creates a paragraph tag/image tag with the results item's rating
                    var p = $("<p>").text("Rating: " + rating);
                    var foodImage = $("<img>");

                    // appends the paragraph tag and foodImage to "gifDiv"
                    foodImage.attr("src", results[i].images.fixed_height.url);

                    foodDiv.append(p);
                    foodDiv.append(foodImage);

                    $("#gifs-appear-here").prepend(foodDiv);
                }

                // create on click button -- page should grab 10 static, non-animated gif images from the giphy API then place on page -- should display or .text?

                // create on click for static giphy image to animate, if the user clicks again it should stop -- reset function?


                // display the rating of each gif (pg, g, pg-13), then move onto the next step


                // add a form to your page that takes a VALUE from the user input box and adds it to the topics array (HTML/JS)


                // make a function call that takes each topic in arry and remakes the buttons on the page -- displays new button

                // End of js document

            })
    })
    
       

});