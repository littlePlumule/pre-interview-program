<template>
  <TheTopic :codes="codes" />
</template>

<script setup>
import TheTopic from '../components/TheTopic.vue'
const codes = {
  code1,
  code2,
  code3,
}

const code1 = `
// template 保持不變
<span
  class="gdb-switch"
  :class="{
    'gdb-switch--checked': checked,
    'gdb-switch--disabled': disabled,
    'gdb-switch--spacing': spacing,
  }"
  @click="toggle"
>
  <div class="gdb-switch__inner">
    <div class="gdb-switch__switch">
      <span class="gdb-switch__icon material-icons-outlined"> {{ checked ? 'done' : 'close ' }} </span>
    </div>
  </div>
  <div v-if="label || description" class="gdb-switch__right">
    <span v-if="label" class="gdb-switch__label" v-text="label" />
    <div v-if="description" class="gdb-switch__description">
      <GDBDescription :text-color="descriptionColor" :icon-color="iconDescriptionColor">
        {{ description }}
      </GDBDescription>
    </div>
  </div>
</span>

    `
const code2 = `

import { isNumber, isString, isNull, isBoolean, isUndefined } from 'lodash-es'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Boolean, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: 'green-1',
    },
    disActiveColor: {
      type: String,
      default: 'gray-3',
    },
    trueValue: {
      type: [String, Number],
      default: null,
    },
    falseValue: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: '標題文字',
    },
    labelColor: {
      type: String,
      default: 'gray-1',
    },
    description: {
      type: String,
      default: '',
    },
    descriptionColor: {
      type: String,
      default: 'gray-2',
    },
    iconDescriptionColor: {
      type: String,
      default: 'gray-2',
    },
    spacing: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    // 將 props 解構以提高可讀性，若在 script 用不到可以不解構，也不用再多寫 props.xxx
    const {
      modelValue,
      disabled,
      activeColor,
      disActiveColor,
      trueValue,
      falseValue,
      label,
      ...
    } = props

    // set css var
    const style = computed(() => ({
      activeColor: \`var(--\${props.activeColor}-color)\`,
      disactiveColor: \`var(--\${props.disActiveColor}-color)\`,
      labelColor: \`var(--\${props.labelColor}-color)\`,
    }))

    // switch functionality
    const checked = computed(() => {
      if (isNumber(props.modelValue) || isString(props.modelValue) || isUndefined(props.modelValue)) return props.modelValue === props.trueValue

      return props.modelValue
    })
    const toggle = () => {
      if (props.disabled) return
      if (isBoolean(props.modelValue)) return emit('update:modelValue', !checked.value)
      if (isNull(props.trueValue) || isNull(props.falseValue)) return console.warn('missing required prop.')

      emit('update:modelValue', !checked.value ? props.trueValue : props.falseValue)
    }

    return {
      style,
      toggle,
      checked,
    }
  },
})

    `
const code3 = `
// style 保持不變
.gdb-switch {
  $self: &;

  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  &--spacing {
    @extend %mb-xl;
  }

  &__inner {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
    background-color: v-bind('style.disactiveColor');
    border-radius: map-get($border-radius, m);
  }

  &__switch {
    position: absolute;
    top: 50%;
    left: 3px;
    z-index: 1;
    width: 20px;
    height: 20px;
    color: v-bind('style.disactiveColor');
    background-color: map-get($theme-colors, white);
    border-radius: map-get($border-radius, circle);
    transition: all 0.3s;
    transform: translate(0, -50%);
  }

  &__icon {
    @extend %icon-s;

    &--spacing {
      @extend %me-xs;
    }
  }

  &__right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  &__label {
    @extend %font-m-default-bold;
    @extend %ms-s;

    color: v-bind('style.labelColor');
  }

  &__description {
    display: inline-flex;

    @extend %ms-s;
  }

  &--checked {
    #{$self}__inner {
      background-color: v-bind('style.activeColor');
    }

    #{$self}__switch {
      left: 27px;
      color: v-bind('style.activeColor');
    }
  }

  &--disabled {
    cursor: not-allowed;

    #{$self}__inner,
    #{$self}__label {
      opacity: 0.5;
    }
  }
}

    `
</script>

<style scoped></style>
