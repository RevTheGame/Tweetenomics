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

var iWebkit;if(!iWebkit){iWebkit=window.onload=function(){function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}}function hideURLbar(){window.scrollTo(0,0.9)}iWebkit.init=function(){fullscreen();hideURLbar()};iWebkit.init()}}
