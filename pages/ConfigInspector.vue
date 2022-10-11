<template>
  <div class="config">
    <p>Config Object:</p>
    <pre>
      {{ configObject }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ConfigInspectorPage',
  // eslint-disable-next-line
  async asyncData({ $config }) {
    return {
      configObject: $config
    }
  }
}
</script>
