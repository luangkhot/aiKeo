<template>
<div class="search-bar">
    <div class="input-group">
        <router-link to="/user-profile" class="user-profile"></router-link>
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search">
    </div>
    <div class="filter-group">
        <div class="filter">
            <div class="filter-label" @click="toggle = !toggle">
                <p class="dfsdfa">Batch</p>
                <i class="fas fa-caret-down"></i>
            </div>
            <div class="filter-dropdown" :class="{'active' : toggle}" >
                <div class="filter-header">
                    <p class="filter-title">Batch</p>
                    <div class="clear">
                        <i class="fas fa-trash-alt"></i>
                        <span>Clear</span>
                    </div>
                </div>
                <hr>
                <div class="filter-item">
                    <input type="checkbox" id="b1">
                    <label for="b1">Batch 1 (1992)</label>
                </div>
                <div class="filter-item">
                    <input type="checkbox" id="b2">
                    <label for="b2">Batch 2 (1993)</label>
                </div>
                <div class="filter-item">
                    <input type="checkbox" id="b3">
                    <label for="b3">Batch 3 (1994)</label>
                </div>
                <hr>
                <div class="button-group">
                    <button class="button apply">Apply</button>
                    <button class="button cancel" @click="toggle = !toggle">Cancel</button>
                </div>
            </div>
        </div>
        <span class="v-line"></span>
        <div class="filter">
            <span class="filter-label">
                <p class="dfsdfa">University</p>
                <i class="fas fa-caret-down"></i>
            </span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data: () => ({
            toggle : false
        })
    }
</script>

<style lang="scss" scoped>
.user-profile{
    cursor: pointer;
    margin-right: 20px;
    background-image: url('https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg');
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    @include mobile{
        width: 30px;
        height: 30px;
    }
    &::after{
        content: '';
        display: block;
        border-radius: 50%;
        margin-top: -5px;
        margin-left: -5px;
        width: 50px;
        height: 50px;
        border: 2px solid $color-1;
        @include mobile{
            width: 40px;
            height: 40px;
        }
    }
}
.search-bar{
    padding: 10px 20px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid $border;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    .input-group{
        flex-grow: 1;
        color: #000;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        input{
            background-color: #fff;
            color: #000;
            border: none;
            width: 100%;
            outline: none;
            padding: 10px;
            font-size: 16px;
            margin: 10px;
            @include mobile{
                padding: 0;
            }
        }
    }
    .v-line{
        display: block;
        width: 1px;
        background-color: #e8e8e8;
        height: 20px;
        margin: 0 10px;
    }
    .filter-group{
        display: flex;
        width: 280px;
        @include mobile{
            width: 100%;
        }
        .filter{
            width: 50%;
            display: flex;
            align-items: center;
            background-color: #fff;
            position: relative;
            justify-content: flex-end;
            @include mobile{
                flex-grow: 1;
                justify-content: center;
            }
            .filter-label{
                cursor: pointer;
                display: flex;
                padding: 0 20px 0 0;
                font-size: 16px;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                @include mobile{
                    font-size: 14px;
                }
                p{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                i{
                    margin-left: 10px;
                    vertical-align: middle;
                    // margin-right: -15px;
                }
            }
        }
    }
}
</style>