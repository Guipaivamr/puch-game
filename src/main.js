import Vue from 'vue'

new Vue({
  el: '#vue-app',
  data:{
    health: 100,
    ended: false,
    points: 0
  },
  methods:{
    punch: function(){
      this.health -= 10;
      if(this.health <= 0)
      {
        this.ended = true;
      }

    },
    restart: function(){
      this.health = 100;
      this.ended = false;
      this.points += 1;
    },
    

  }

  
})
