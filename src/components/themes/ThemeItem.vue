<script setup lang="ts">
const props = defineProps<{
  id: number
  type: String
  name: String
  alias: String
  image: String
}>()

const submitForm = () => {
  console.log('test')
}
</script>

<template>
  <tr>
    <td>test</td>
    <td>{{ props.id }}</td>
    <td>{{ props.type }}</td>
    <td>{{ props.name }}</td>
    <td>{{ props.alias }}</td>
    <td>{{ props.image }}</td>
  </tr>
  m>
</template>
