function addUser()
{

    document.getElementById("player1_name_input").value;
    document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name_input", player1_name_input);
    localStorage.setItem("player2_name_input", player1_name_input);

    window.location.replace("quiz_game_page.html");
}