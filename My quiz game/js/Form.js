class Form {
  constructor() {
    
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350,0);

    this.question.html("Question-What starts and ends with letter 'E',but has only one letter? ")
    this.question.position(150,80);
    this.option1.html("1:Everyone");
    this.option1.position(150,100)
    this.option2.html("2:Enevolpe");
    this.option2.position(150,100)
    this.option3.html("3:Extimate");
    this.option3.position(150,100)
    this.option4.html("4:E");
    this.option4.position(150,100)


    var input = createInput("Name");
    var button = createButton('Option NO.');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello" + name )
      greeting.position(130, 160)
    });

  }
}
