<template>
<div class="section">
    <div class="container">
        <div class="header">
            <h3 class="title">Admin</h3>
            <div class="logout">
                <span @click="$router.push({name:'login'})"><i class="fas fa-sign-out-alt"></i> Logout</span>
            </div>
        </div>
        <table class="table is-fullwidth" id="mytb">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th class="icon-group">Option</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="index in 5" :key="index">
                    <td>Anousone</td>
                    <td>
                        <span class="pw">dsfk92k</span>
                    </td>
                    <td>anousone108@me.com</td>
                    <td class="icon-group">
                        <span><i class="fas fa-search"></i></span>
                        <span><i class="fas fa-redo-alt"></i></span>
                        <span><i class="fas fa-trash"></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h3{
        margin: 0;
        padding: 0;
    }
    .logout{
        cursor: pointer;
        padding: 5px 10px;
        background-color: $color-3;
        border-radius: 5px;
        margin-left: auto;
    }
}
.icon-group{
    font-size: 14px;
    width: 120px;
    span{
        cursor: pointer;
        padding: 5px;
        margin-left: 5px;
        &:hover{
            color: $color-1;
        }
    }
}
#mytb{
    border-collapse: separate;
    border-spacing: 0 10px;
    thead{
        th{
            border: none;
        }
    }
    tbody{
        tr{
            webkit-box-shadow: 0px 0px 0px 1px $color-3;
            -moz-box-shadow: 0px 0px 0px 1px $color-3;
            box-shadow: 0px 0px 0px 1px $color-3;
            td{
                border: none;
                vertical-align: middle;
                .pw{
                    color: $color-1;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>