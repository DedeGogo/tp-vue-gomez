<template>
  <div>
    <router-link :to="{ name: 'UserApp' }">User App</router-link>
    <router-link :to="{ name: 'AdminApp' }">Admin App</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
/* Is this View necesarry?!? If it is, it should do something !!!!
 */
export default {
  name: "Home",

  components: {},
};
</script>
