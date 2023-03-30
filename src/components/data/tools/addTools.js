<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

function clearForm() { 
    $('#tool_name').val('');
    $('#tool_description').val('');
}

console.log("here");

$document.on('submit', '#add_tool_form', function(e) { 
    e.preventDefault();
    console.log("here");
    var tool_name = $('#tool_name').val();
    var tool_description = $('#tool_description').val();
    var tool = {
        "name": tool_name,
        "description": tool_description
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:5050/tools/post",
        data: JSON.stringify(tool),
        headers: {
          "Content-Type": "application/json"
        },
        success: function (response) {
            console.log(response);
            clearForm();
        },
        error: function (response) {
            console.log(response);
        }
    });
});