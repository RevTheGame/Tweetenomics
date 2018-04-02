
$("#logHandle").on('click', function()
{
    localStorage.setItem('handle', $('#handleName').val());
});

$("#thingSpecified").on('click', function()
{
  console.log("thing clicked");
  localStorage.setItem('want', $('#inputGroupSelect01').val() + " " + $('#thingDesired').val());
  localStorage.setItem('cost', $('#thingCost').val());
});



$("#logChoice").on('click', function()
{
  localStorage.setItem('choice', $('input[name="options"]:checked').val());
});


function back()
{
  window.history.back();
}

function refresh()
{
  location.reload();
}
