<template>
    <div>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>
<style type="text/css" lang="css">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>