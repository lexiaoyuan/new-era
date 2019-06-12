<template>
    <div>
        <nav-bar></nav-bar>
        <new-era-one-minute-brief></new-era-one-minute-brief>
        <new-era-one-minute-video></new-era-one-minute-video>
        <router-view></router-view>
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import NewEraOneMinuteBrief from '../components/NewEra/NewEraOneMinuteBrief'
import NewEraOneMinuteVideo from '../components/NewEra/NewEraOneMinuteVideo'
export default {
    components: {
        NavBar,
        NewEraOneMinuteBrief,
        NewEraOneMinuteVideo
    }
}
</script>
<style scoped>

</style>
