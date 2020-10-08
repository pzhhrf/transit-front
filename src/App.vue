<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
*,
:after,
:before {
    box-sizing: inherit !important;
}
html,
body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: "Microsoft Yahei", "Segoe UI", "Helvetica Neue", Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    background: #f9faff;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
#app {
    width: 100%;
    height: 100%;
}
</style>
