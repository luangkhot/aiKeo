<template>
<div class="columns is-mobile is-multiline">
  <div class="column is-3-desktop is-4-tablet is-12-mobile" v-for="(u, index) in users" :key="index" >
      <div class="user-card">
        <div class="user-card-header">
          <span class="batch">Batch 1 (1992)</span>
        </div>
        <div class="user-card-image"></div>
        <div class="user-card-content">
            <h3 class="name">{{u.name}}</h3>
            <p>Chulalongkorn University</p>
            <p>Agriculture</p>
            <button class="button">View</button>
        </div>
      </div>
  </div>
</div>
</template>

<script>
    export default {
        data: () => ({
          users:[
            {name:"Angelina jolie"},
            {name:"Angelina jolie"},
            {name:"Angelina jolie"},
            {name:"Angelina jolie"},
            {name:"Angelina jolie"},
            {name:"Angelina jolie"}
          ]
        })
    }
</script>

<style lang="scss" scoped>

.user-card{
  box-shadow:  0 1px 6px 0 rgba(25, 25, 25, 0.16);
  // box-shadow: 0 0 6px rgba(25,25,25,.16);
  border: 1px solid $color-3;
  padding: 0 20px 20px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  .user-card-header{
    display: flex;
    margin-bottom: 20px;
      .batch{
        margin: 0 auto;
        font-size: 12px;
        padding: 5px 5px 5px 10px;
        border-radius: 0 0 5px 5px;
        background-color: $color-1;
        color: #fff;
      }
  }
  .user-card-image{
    background-image: url('../../public/images/12.jpg');
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px; 
    &::before{
      position: absolute;
      content: '';
      display: block;
      border-radius: 50%;
      margin-top: -10px;
      margin-left: -10px;
      width: 170px;
      height: 170px;
      border: 3px solid $color-1;
    }
  } // user-card-image

  .user-card-content{
    text-align: center;

    .name{
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    button{
      margin-top: 20px;
      font-size: 14px;
      border: none;
      background-color: $color-3;
      color: inherit;
      &:focus{
        outline: none;
        box-shadow: none;
      }
    }

  }
}
</style>