<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixins from './FrutasMixins'

export default {
  name: "Frutas",
  mixins: [FrutasMixins]
};
</script>