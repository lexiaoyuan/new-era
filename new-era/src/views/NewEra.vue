<template>
    <div>
        <nav-bar></nav-bar>
        <new-era-one-minute-brief></new-era-one-minute-brief>
        <new-era-one-minute-video></new-era-one-minute-video>
        <new-era-achieve></new-era-achieve>
        <router-view></router-view>
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import NewEraOneMinuteBrief from '../components/NewEra/NewEraOneMinuteBrief'
import NewEraOneMinuteVideo from '../components/NewEra/NewEraOneMinuteVideo'
import NewEraAchieve from '../components/NewEra/NewEraAchieve'
export default {
    components: {
        NavBar,
        NewEraOneMinuteBrief,
        NewEraOneMinuteVideo,
        NewEraAchieve
    }
}
</script>
<style scoped>

</style>
