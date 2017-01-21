(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var x = 0; x < names.length; x++) {
    var firstLetter = names[x].charAt(0);
    
    if(firstLetter.toLowerCase() === 'j'){
      byeSpeaker.speak(names[x]);
    }
    else
    {
      helloSpeaker.speak(names[x]);
    }
  }

})();
