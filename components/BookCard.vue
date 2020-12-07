<template>
  <div>
    <div class="bg-white border rounded-sm overflow-hidden flex">

      <div class="bg-red-900">
        <a :href="linkUrl">
          <img class="h-48 w-full object-cover" :src="imageUrl" :alt="title">
        </a>
      </div>

      <div class="p-6 h-48">
        <div class="font-bold">{{ title }}</div>
        {{ summary }}
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "BookCard.vue",
  props: [
    'imageUrl', 'linkUrl', 'title', "summary"
  ]
}
</script>

<style scoped>

</style>
