class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        member = new Member();
        var memberCountRef = await database.ref('memberCount').once("value");
        if(memberCountRef.exists()){
          memberCount = memberCountRef.val();
          member.getCount();
        }
        form = new Form()
        form.display();
    }
    }
}