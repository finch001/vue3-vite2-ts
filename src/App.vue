<template>
  <div class="layout" style="min-height: 100vh">
    <div style="padding: 0 50px; background-color: white">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  unref,
  watch,
  watchEffect
} from 'vue';

import { useRouter } from 'vue-router';
import { registeComp } from './utils/comp';

// registeComp(Layout);

interface Nav {
  key: string;
  path: string;
  displayName: string;
}

interface MenuState {
  selectedKeys: string[];
}

export default defineComponent({
  name: 'App',
  components: {
    // [Menu.name]: Menu,
    // [Menu.Item.name]: Menu.Item,
    // [Layout.name]: Layout,
    // [Layout.Header.name]: Layout.Header,
    // [Layout.Content.name]: Layout.Content,
    // [Layout.Footer.name]: Layout.Footer,
  },
  setup() {
    const navs: Nav[] = [
      {
        key: '/naive-tmpl',
        path: '/naive-tmpl',
        displayName: 'naive-tmpl'
      }
    ];
    const router = useRouter();
    const state = reactive<MenuState>({
      selectedKeys: []
    });

    //等路由变了之后激活
    watchEffect(() => {
      state.selectedKeys = [router.currentRoute.value.path];
    });

    const choose = ({
      key,
      item,
      selectedKeys
    }: {
      item: Nav;
      key: string;
      selectedKeys: string[];
    }): void => {
      state.selectedKeys = [key];
      router.push(key);
    };

    return {
      ...toRefs(state),
      navs,
      choose
    };
  }
});
</script>
