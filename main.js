function loadCharacter(pageName) {
    // Redirects the user to the character's specific page
    window.location.href = pageName + ".html";
}

function filterList() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let grid = document.getElementById('characterList');
    let buttons = grid.getElementsByTagName('button');

    for (i = 0; i < buttons.length; i++) {
        let title = buttons[i].getElementsByTagName("h2")[0];
        let txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}
