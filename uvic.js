window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) 
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) 
        var openDropdown = dropdowns[i]; 
        if (openDropdown.classList.contains('show')) 
          openDropdown.classList.remove('show');
        }

        function myFunction() { 
            let new_color = document.getElementById("loadSectionButton").value;
        document.getElementById("study").style.backgroundColor = new_color;
        }

        function navigateToNewPage() {
          // Navigate to the new HTML page
          window.location.href = 'post.html';
        }