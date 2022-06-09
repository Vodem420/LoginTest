<template>
    <div>
        <HeaderComp/>
        <div class="banner__wrapper" :style="bannerStyle">
            <div class="banner">
                <p>Welcome to</p>
                <p>Business Analytics Online</p>
            </div>
        </div>
        <div class="loginContent">
            <div class="loginContent__left">
                <p> <b>Business Analytics</b> — a new, convenient tool for managing and forecasting your business performance,
                    which will help analyze your own finances and cash flows,
                    visualize your reporting, business processes, KPI's
                </p>
                <div class="loginContent__left__item">
                    <img :src="$img['CheckMark']" />
                    <b>Interactive Reporting</b>
                    <p> In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM),
                        E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta),
                        Google Analytics and many more systems that reflect different aspects of business activities.
                    </p>
                </div>
                <div class="loginContent__left__item">
                    <img :src="$img['CheckMark']" />
                    <b>Automated data updates</b>
                    <p> The application automatically updates and structures the data in just 60 seconds,
                        saving you time and money.
                    </p>
                </div>
                <div class="loginContent__left__item">
                    <img :src="$img['CheckMark']" />
                    <b>Data Security</b>
                    <p> The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.
                    </p>
                </div>
            </div>
            <div class="loginContent__right">
                <form @submit="checkForm">
                    <VInput 
                        type="text"
                        v-model="name" 
                        label="Name" 
                        id="name" 
                        placeholder="Name" 
                        :error="errors.name"
                        @input="errors.name = null"
                      />
                    <VInput 
                        type="password"
                        v-model="password"
                        label="Password"
                        id="password"
                        placeholder="Password" 
                        :error="errors.password"
                        @input="errors.password = null"
                       />
                    <button type="submit" class="btn btn__main">LOGIN</button>
                    <div class="helpButtons">
                        <span>Forgot Password</span>
                        <span>Register now</span>
                    </div>
                </form>
            </div>
        </div>
        <FooterComp/>
    </div>
</template>

<script>
import VInput from '../components/V-Input.vue'
import HeaderComp from '@/components/Header-comp.vue';
import FooterComp from '@/components/Footer-comp.vue';
export default{
    components: { VInput, HeaderComp, FooterComp },
    data() {
        return {
            name: '',
            password: '',
            errors: {
                name: '',
                password: '',
            },
            bannerStyle: {
                backgroundImage: `url(${this.$img["LoginBanner"]})`
            },
            fakeUser: {
                name: 'Admin',
                password: '12345'
            }
        };
    },
    methods:{
        chekName(){
            if(!this.name.length){
                return this.errors.name = 'Name is required'
            }
            if(this.name !== this.fakeUser.name){
                return this.errors.name = 'Wrong Name'
            }
        },
        chekPassword(){
            if(!this.password.length){
                return this.errors.password = 'Pass is required'
            }
            if(this.password !== this.fakeUser.password){
                return this.errors.password = 'Wrong Password'
            }
        },
        checkForm(e) {
            e.preventDefault();
            this.chekName();
            if(!this.errors.name){
                this.chekPassword();
            }
            if(!this.errors.name && !this.errors.password){
                localStorage.name = this.name;
                this.name = '';
                this.password = '';
                this.$router.push('todo');
            }

        }
    }
}
</script>