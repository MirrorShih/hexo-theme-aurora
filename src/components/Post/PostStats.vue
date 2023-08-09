<template>
  <div
    class="post-stats"
    v-if="postTimeCount !== undefined && postWordCount !== undefined"
  >
    <span>
      <SvgIcon
        icon-class="clock-outline"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        {{ postTimeCount }}
      </span>
    </span>
    <span>
      <SvgIcon
        icon-class="text-outline"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        {{ postWordCount }}
      </span>
    </span>

    <!-- Waline -->
    <span v-if="plugin === 'waline'">
      <SvgIcon
        class="h-5 w-5"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span class="waline-pageview-count">
          <ob-skeleton width="40px" height="16px" />
        </span>
      </span>
    </span>
    <span v-if="plugin === 'waline'">
      <SvgIcon
        class="h-5 w-5"
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span class="waline-comment-count" :data-path="currentPath">
          <ob-skeleton width="40px" height="16px" />
        </span>
      </span>
    </span>

    <!-- Twikoo -->
    <span v-if="plugin === 'twikoo'">
      <SvgIcon
        class="h-5 w-5"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70" id="twikoo_visitors">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span v-if="plugin === 'twikoo'">
      <SvgIcon
        class="h-5 w-5"
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <template v-if="commentCount === undefined">
          <ob-skeleton width="40px" height="16px" />
        </template>

        <template v-else>
          {{ commentCount }}
        </template>
      </span>
    </span>

    <!-- Valine -->
    <span v-if="plugin === 'valine'">
      <SvgIcon
        class="h-5 w-5"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span
          :id="currentPath"
          class="leancloud_visitors"
          :data-flag-title="postTitle"
        >
          <i class="leancloud-visitors-count">
            <ob-skeleton width="40px" height="16px" />
          </i>
        </span>
      </span>
    </span>
  </div>

  <div v-else class="post-stats">
    <span>
      <SvgIcon
        icon-class="clock-outline"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span>
      <SvgIcon
        icon-class="text-outline"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span
      v-if="plugin === 'waline' || plugin === 'twikoo' || plugin === 'valine'"
    >
      <SvgIcon
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span v-if="plugin === 'waline' || plugin === 'twikoo'">
      <SvgIcon
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref, defineExpose } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import {
  enabledCommentPlugin,
  initCommentPluginCommentCount,
  intiCommentPluginPageView
} from '@/utils/comments/helpers'
import { PluginsData, ThemeConfig } from '@/models/ThemeConfig.class'

export default defineComponent({
  name: 'ObPostStats',
  components: { SvgIcon },
  props: {
    postWordCount: {
      type: Number || undefined
    },
    postTimeCount: {
      type: String || undefined
    },
    postTitle: {
      type: String
    },
    pluginConfigs: {
      type: Object as PropType<PluginsData>,
      default: () => new ThemeConfig().plugins,
      required: true
    },
    currentPath: {
      type: String,
      default: '/',
      required: true
    }
  },
  setup(props, { expose }) {
    const commentCount = ref<number | undefined>(undefined)
    const enabledPlugin = computed(
      () => enabledCommentPlugin(props.pluginConfigs).plugin
    )

    const getCommentCount = async () => {
      commentCount.value = await initCommentPluginCommentCount(
        enabledPlugin.value,
        props.currentPath,
        props.pluginConfigs
      )
    }

    const getPostView = () => {
      intiCommentPluginPageView(
        enabledPlugin.value,
        props.currentPath,
        props.pluginConfigs
      )
    }

    expose({
      getCommentCount,
      getPostView
    })

    return {
      commentCount,
      plugin: enabledPlugin
    }
  }
})
</script>