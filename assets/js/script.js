let chooseTheme = () => {
    switch (document.getElementById("themeSelect").value) {
        case "light": document.body.style.backgroundColor = "white"; break;
        case "dark": document.body.style.backgroundColor = "#23262F"; break;
        case "pink": document.body.style.backgroundColor = "#FF69B4"; break;
    }
  }
