<template>
  <div :class="calssObje" class="app-wrapper">
    layout
    <div class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
        <tags-view />
      </div>
      <app-main />
      <settings />
    </div>
  </div>
</template>

<script>
// import RightPanel from '@components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Settings,
    Sidebar,
    TagsView
  },
  /**
   * mixins是什么？
   */
  // mixins: [ResizeMixin],
  computed: {
    classObj() {
      return null
    }
  },
  methods: {
    handleClickOutside() {
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

    .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>