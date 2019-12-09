<template>
<section class="section">
    <div class="container">
        <h3>Reset Password</h3>
        <form action="">
            <div class="field">
                <label for="" class="label">Old Password</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">New Password</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
        </form>
        <p class="notify">Reset Password Successfully</p>
        <button class="button save">Save</button>
        <button class="button cancel" @click="$router.push({name:'userprofile'})">Cancel</button>
    </div>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h3{
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
}
.label{
    font-size: 16px;
    font-weight: normal;
}
.input{
    box-shadow: none;
    box-shadow: unset;
    border: 1px solid $border;
    &:focus{
        box-shadow: none;
        box-shadow: unset;
        outline: none;
        border: 1px solid $color-1;
    }
}
.notify{
    margin-top: 20px;
    color: $color-1;
}
.button{
    margin-top: 20px;
    box-shadow: none;
    border: none;
    &:focus{
        box-shadow: unset;
        box-shadow: none;
        border: none;
    }
    &.save{
        background-color: $color-1;
        color: #fff;
    }
    &.cancel{
        background-color: $color-3;
        margin-left: 10px;
    }
}
</style>