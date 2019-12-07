<template>
<div class="section">
    <div class="container">
        <div class="nav">
            <router-link to="/home" class="back">
                <i class="fas fa-chevron-left"></i>
                Back
            </router-link>
        </div>
        <div class="columns">
            <div class="column is-3-desktop is-4-tablet">
                <div class="user-card">
                    <div class="user-card-header">
                        <span class="batch">Batch 1 (1992)</span>
                    </div>
                    <div class="user-card-image"></div>
                    <div class="user-card-content">
                        <h3 class="name">
                            Angelina jolie <br>
                            <span>(Mely)</span>
                        </h3>
                        <p>Chulalongkorn University</p>
                        <p>Agriculture</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="box-item">
                        <span class="label">Phone Number</span>
                        <span>02052414965</span>
                    </div>
                    <div class="box-item">
                        <span class="label">Whatsapp Number</span>
                        <span>02052414965</span>
                    </div>
                    <div class="box-item">
                        <span class="label">Email address:</span>
                        <span>Anousone.luangkhot@gmail.com</span>
                    </div>
                    <div class="box-item">
                        <span class="label">Facebook Account link</span>
                        <a href="">www.facebook.com/keovisouk.dalasane</a>
                    </div>
                </div>
                <div class="box">
                    <div class="box-item">
                        <span class="label">Highest degree of education</span>
                        <p>PhD - Economics - Kobe University, Japan)</p>
                    </div>
                    <div class="box-item">
                        <span class="label">Currently work</span>
                        <p>Accounting Manager</p>
                        <p>World Bank</p>
                        <p>International Organization</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    .back{
        color: inherit;
        font-size: 14px;
        margin-bottom: 20px;
        cursor: pointer;
        font-weight: normal;
        padding: 5px 10px;
        display: inline-block;
        border-radius: 5px;
        background-color: rgba($color: $color-2, $alpha: 0.3);
        &:hover{
            background-color: rgba($color: $color-2, $alpha: 1);
        }
        i{
            margin-right: 0px;
        }
    }
}


.user-card{
  border: 1px solid $border;
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
        background-color: $color-3;
      }
  }
  .user-card-image{
    width: 150px;
    height: 150px;
    background-image: url('https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: auto;
    border-radius: 50%;
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
      background-color: $color-1;
      color: #fff;
      &:focus{
        outline: none;
        box-shadow: none;
      }
    }

  }
}
.box{
    box-shadow: none;
    box-shadow: unset;
    border: 1px solid $border;
    .box-item{
        margin-bottom: 10px;
        .label{
            color: $color-2;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 10px;
            margin: 0;
            padding: 0;
        }
    }
}
</style>