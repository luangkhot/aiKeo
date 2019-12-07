<template>
<div class="section">
    <div class="container">
        <div class="nav">
            <div class="save">
                Save
            </div>
            <router-link to="/home" class="cancel">
                <i class="fas fa-sign-out-alt"></i>
                Cancel
            </router-link>
        </div>
        <form action="">
            <div class="field">
                <div class="profile-image">
                    <i class="fas fa-camera"></i>
                </div>
            </div>
            <div class="field">
                <label for="" class="label">First Name Family Name (English) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">First Name Family Name (ພາສາລາວ) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Nickname (ພາສາ​ລາວ)​ *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Phone number (eg. 020xxxxxxxx) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Whatsapp Number</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>

            <div class="field">
                <label for="" class="label">Email address *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Facebook Account link</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="">Choose and select the number of Batch and (Year) attended Satitkaset that's correct for you. *</label>
                <div class="checkbox-list">
                    <div class="checkbox" v-for="(b, index) in batchs" :key="index">
                        <input type="checkbox" class="input" :id="b.id">
                        <label :for="b.id" class="label">{{b.batch}}</label>
                    </div>
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Which university did you immediately enroll after leaving Satitkaset? (Choose one) *</label>
                <div class="checkbox-list">
                    <div class="checkbox" v-for="(s, index) in schools" :key="index">
                        <input type="radio" class="radio" :id="s.id" name="school">
                        <label :for="s.id" class="label">{{s.name}}</label>
                    </div>
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Major graduated from that university ? (eg. Engineering; Economics; Agriculture...etc) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">What is your highest degree of education - field of study - University name, country ? (eg. PhD - Economics - Kobe University, Japan)</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Currently where do you work ? (ໃຫ້ຂຽນຊື່ເຕັມ ສະຖານທີ່ເຮັດວຽກປະຈຸບັນ ເປັນພາສາລາວ ຫລື ອັງກິດກໍໄດ້) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>

            <div class="field">
                <label for="" class="label">What sector or industry your current work will be best described ? (eg. Banking; NGO; Energy; Agriculture; Handicraft; IT; ...etc) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">What is your current position at the workplace ? (ໃຫ້ຂຽນຕໍາແຫນ່ງວຽກ ປະຈຸບັນເປັນພາສາລາວ ຫລື ພາສາອັງກິດກໍໄດ້) *</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="nav">
                <div class="save">
                    Save
                </div>
                <router-link to="/home" class="cancel">
                    <i class="fas fa-sign-out-alt"></i>
                    Cancel
                </router-link>
            </div>
        </form>
    </div>
</div>
</template>

<script>
    export default {
        data: () => ({
            batchs:[
                {batch:"Batch 1 (1992)", id:"b1"},
                {batch:"Batch 2 (1993)", id:"b2"},
                {batch:"Batch 3 (1994)", id:"b3"},
                {batch:"Batch 4 (1995)", id:"b4"},
                {batch:"Batch 5 (1996)", id:"b5"},
                {batch:"Batch 6 (1997)", id:"b6"}  
            ],
            schools:[
                {name:"Kasetsart University", id:"s1"},
                {name:"Thammasart University", id:"s2"},
                {name:"Chulalongkorn University", id:"s3"},
                {name:"Chiangmai University", id:"s4"},
                {name:"KhonKaen University", id:"s5"},
                {name:"Songkranakarin University", id:"s6"},
                {name:"Other", id:"s7"}  
            ]
        })
    }
</script>

<style lang="scss" scoped>
// form design
.field{
    margin-bottom: 20px;
    .label{
        font-family: $font;
        font-size: 14px;
        font-weight: normal;
        margin: 5px 0;
    }
    .profile-image{
        width: 140px;
        height: 140px;
        background-image: url('../../public/images/12.jpg');
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
        &::after{
            content: '';
            display: block;
            border: 2px solid $color-1;
            width: 160px;
            height: 160px;
            margin-bottom: -10px;
            margin-top: -10px;
            margin-left: -10px;
            position: absolute;
            border-radius: 50%;
        } // after
        .fa-camera{
            position: absolute;
            bottom: -5px;
            right: 0;
            z-index: 9;
            padding: 10px;
            background-color: $color-1;
            color: #fff;
            border-radius: 50%;
        }
    }
}


// checkbox
.checkbox-list{
    margin-top: 20px;
    .checkbox{
        display: block;
        white-space: nowrap;
        &:not(:last-child){
            margin-bottom: 10px;
        }
        input{
            display: none;
            visibility: hidden;
            &:hover ~ label::before{
                background: $color-4;
            }
            &:hover ~ label::after{
                background: $color-2;
                box-shadow: 
                2px 0 0 $color-2,
                4px 0 0 $color-2,
                4px -2px 0 $color-2,
                4px -4px 0 $color-2,
                4px -6px 0 $color-2,
                4px -8px 0 $color-2;
            }
            &:checked ~ label::before{
                background: $color-4;
            }
            &:checked ~ label::after{
                content: '';
                position: absolute;
                left: 5px;
                top: 9px;
                background: white;
                width: 2px;
                height: 2px;
                box-shadow: 
                2px 0 0 white,
                4px 0 0 white,
                4px -2px 0 white,
                4px -4px 0 white,
                4px -6px 0 white,
                4px -8px 0 white;
                transform: rotate(45deg);
            }
        }
        label{
            cursor: pointer;
            position: relative;
            &::before{
                content: '';
                margin-right: 10px;
                display: inline-block;
                vertical-align: text-top;
                width: 20px;
                height: 20px;
                background: $color-3;
            }
            &::after{
                content: '';
                position: absolute;
                left: 5px;
                top: 9px;
                background: $color-2;
                width: 2px;
                height: 2px;
                box-shadow: 
                2px 0 0 $color-2,
                4px 0 0 $color-2,
                4px -2px 0 $color-2,
                4px -4px 0 $color-2,
                4px -6px 0 $color-2,
                4px -8px 0 $color-2;
                transform: rotate(45deg);
            }
        }
    }
}


// Navigation
.nav{
    display: flex;
    justify-content: space-between;
    width: 100%;
    .save{
        background-color: $color-1;
        color: #fff;
        font-size: 14px;
        margin-bottom: 20px;
        cursor: pointer;
        font-weight: normal;
        padding: 5px 10px;
        display: inline-block;
        border-radius: 5px;
    }
    .cancel{
        color: inherit;
        font-size: 14px;
        margin-bottom: 20px;
        cursor: pointer;
        font-weight: normal;
        padding: 5px 10px;
        display: inline-block;
        border-radius: 5px;
        background-color: $color-3;
        i{
            margin-right: 0px;
        }
    }
}

</style>