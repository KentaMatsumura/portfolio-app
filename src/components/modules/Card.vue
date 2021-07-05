<template>
  <div>
    <b-card
      :header="this.header"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      :footer="this.footer"
      footer-tag="footer"
      footer-bg-variant="success"
      footer-border-variant="dark"
      :title="this.title"
      style="max-width: 20rem"
    >
      <b-card-text>{{ this.content }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from '@vue/composition-api';

export default {
  data: function () {
    return {
      header: 'ヘッダー',
      title: 'タイトル',
      content: 'コンテント',
      footer: 'フッター',
    };
  },
};
</script>

<style>
</style>
