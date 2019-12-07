<template>
<div class="login-page-container">

    <div class="login-card">
        <h3 class="login-card-title">
            Please Login
        </h3>
        <div class="field">
            <!-- <label for="">Email</label> -->
            <input type="text" placeholder="Email Address">
        </div>
        <div class="field">
            <!-- <label for="">Password</label> -->
            <input type="text" placeholder="Password">
        </div>
        <button class="button">Login</button>
    </div>

</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.login-page-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width: 320px;
        padding: 20px;
        &::before{
            content: "";
            display: block;
            min-height: 2.5rem;
            height: 1.5rem;
            -webkit-box-flex: 1;
            box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
        }
        &::after{
            content: "";
            display: block;
            min-height: 2.5rem;
            height: 1.5rem;
            -webkit-box-flex: 1;
            box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
        }
        .login-card-title{
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        } // login-card-title

        .field{
            box-sizing: inherit;
            margin-bottom: 20px;
            label{
                font-size: 16px;
                margin-right: 10px;
            }
            input{
                background: $bg;
                border-left: none;
                border-right: none;
                border-top: none;
                border-bottom: 1px solid $color-3;
                font-size: 16px;
                font-weight: normal;
                padding: 10px 0;
                width: 100%;
                &:focus{
                    outline: none;
                }
            }
        } // field

        .button{
            font-size: 16px;
            width: 100%;
            padding: 10px;
            background-color: $color-1;
            border: none;
            cursor: pointer;
            color: #fff;
            &:focus{
                outline: none;
            }
        }
    }
}
</style>