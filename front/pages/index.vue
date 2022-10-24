<template>
  <div v-cloak>
<!--    <AppLoader />-->
    <AppNavbar @openModalHandler="isOpenModal = true" />
    <HeaderSection @openModalHandler="isOpenModal = true"/>
    <SliderSection/>
    <ProfitSection/>
    <PartnersSection/>
    <CasesSection/>
    <WhereSection />
    <AppPopup v-model="isOpenModal"/>
  </div>
</template>

<script>
import AppLoader from "~/components/ui/AppLoader";
import AppPopup from "~/components/ui/AppPopup";

export default {
  name: 'IndexPage',
  components: {
    AppPopup,
    AppLoader,
  },
  data(){
    return {
      isOpenModal:false,
    }
  },
  mounted() {
    console.log(this.$t)
    // window.scroll({left:0})
  },
  methods:{
    testHandler() {
      this.$axios.post('http://localhost:8000/api/sendMail', {
        test: 'isTest'
      })
    }
  }
}
</script>
