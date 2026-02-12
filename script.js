<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>WSG</h1>
    <p>First website yessir</p>

    <!-- Button -->
    <button id="myButton">Click me!</button>

    <!-- Link JS -->
    <script src="script.js"></script>
  </body>
</html>
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("You clicked the button! 🎉");
});
<script src="script.js"></script>
