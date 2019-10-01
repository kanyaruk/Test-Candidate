<template>
  <div style="margin-top: 90px;">
    <div class="layout" :key="car.id" v-for="car in sortedCars">
      <div class="capitalize"> {{car.name}} </div>&nbsp;want to buy {{car.cars}} <br>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      cars: [
        {
          id: 1,
          name: 'rick',
          cars: 'Corvette Z06, Lotus Exite S'
        },
        {
          id: 2,
          name: 'john',
          cars: 'BMW 320D'
        },
        {
          id: 3,
          name: 'zing',
          cars: 'Honda Jazz, Honda Click, Honda Waves' 
        }
      ]  
    }
  },
  computed: {
    // a computed getter
    sortedCars: function () {
      // `this` points to the vm instance
      let cloneCars = [...this.cars];
      cloneCars.sort((a,b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
      return cloneCars
    }
  } 
}
</script>

<style>
.capitalize { 
  text-transform: capitalize; 
  display: inline;
  
  }
  .layout {
    display: flex;
    justify-content: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 20pt;
  }
</style>
