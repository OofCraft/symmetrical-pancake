class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("THE QUIZ.net");
      title.position(350, 0);

      this.question.html("Q: What was added in the Minecraft 1.16 Update?")
      this.question.position(150,80);
      this.option1.html("A. Magma Block")
      this.option1.position(150,100);
      this.option2.html("B. Ancient Debris")
      this.option2.position(150,120);
      this.option3.html("C: Soul Sand")
      this.option3.position(150,140)
      this.option4.html("D: Honeycomb Block")
      this.option4.postion(150,160);

      this.input1.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  