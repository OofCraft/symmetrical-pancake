class Member {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var memberCountRef = database.ref('memberCount');
      memberCountRef.on("value",(data)=>{
        memberCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        memberCount: count
      });
    }
  
    update(){
      var memberIndex = "members/member" + this.index;
      database.ref(memberIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getmemberInfo(){
      var memberInfoRef = database.ref('members');
      memberInfoRef.on("value",(data)=>{
        allmembers = data.val();
      })
    }
  }
  