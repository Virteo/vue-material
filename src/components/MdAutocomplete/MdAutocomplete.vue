<template>
  <md-field class="md-autocomplete" :class="fieldClasses" md-clearable :md-inline="isBoxLayout">
    <md-menu md-direction="bottom-start" :md-dense="mdDense" md-align-trigger md-full-width :md-active.sync="showMenu">
      <md-input
        v-model="searchTerm"
        v-bind="$attrs"
        :id="mdInputId"
        :name="mdInputName"
        :maxlength="mdInputMaxlength"
        :placeholder="mdInputPlaceholder"
        @focus.stop="openOnFocus"
        @blur="hideOptions"
        @input="onInput"
        @click.stop.prevent="openOnFocus" />

      <md-menu-content :class="contentClasses" ref="menuContent">
        <div class="md-autocomplete-items" v-if="hasItems">
          <md-menu-item v-for="(item, index) in mdOptions" :key="index" @click="selectItem(item, $event)" @mouseover="listItemHover(index)" @mousemove="listItemHover(index)">
            <slot name="md-autocomplete-item" :item="item" :term="searchTerm" v-if="$scopedSlots['md-autocomplete-item']" />
            <template v-else>{{ item }}</template>
          </md-menu-item>
        </div>
      </md-menu-content>
    </md-menu>

    <slot />
  </md-field>
</template>

<script>
  import fuzzy from 'fuzzysearch'
  import isPromise from 'is-promise'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default {
    name: 'MdAutocomplete',
    props: {
      value: {
        type: null,
        required: true
      },
      mdDense: Boolean,
      mdLayout: {
        type: String,
        default: 'floating',
        ...MdPropValidator('md-layout', [
          'floating',
          'box'
        ])
      },
      mdOpenOnFocus: {
        type: Boolean,
        default: true
      },
      mdFuzzySearch: {
        type: Boolean,
        default: true
      },
      mdOptions: {
        type: [Array, Promise],
        required: true
      },
      mdInputName: String,
      mdInputId: String,
      mdInputMaxlength: [String, Number],
      mdInputPlaceholder: [String, Number]
    },
    data () {
      return {
        searchTerm: this.value,
        showMenu: false,
        triggerPopover: false,
        isPromisePending: false,
      }
    },
    computed: {
      isBoxLayout () {
        return this.mdLayout === 'box'
      },
      fieldClasses () {
        if (this.isBoxLayout) {
          return 'md-autocomplete-box'
        }
      },
      contentClasses () {
        var classes = "";
        if (this.isBoxLayout) {
          classes += 'md-autocomplete-box-content '
        }
        if(!this.hasItems) {
          classes += 'no-items'
        }
        return classes;
      },
      hasItems () {
        return this.mdOptions.length > 0
      },
      hasScopedEmptySlot () {
        return this.$scopedSlots['md-autocomplete-empty']
      }
    },
    watch: {
      value (val) {
        this.searchTerm = val
        if(this.$refs.menuContent) this.$refs.menuContent.setInitialHighlightIndex();
      },
      mdOptions (val) {
        this.fixPopperBug(val);
      } 
    },
    methods: {
      listItemHover(index) {
        this.$refs.menuContent.setHighlightIndex(index)
      },
      openOnFocus () {
        if (this.mdOpenOnFocus) {
          this.showOptions()
        }
      },
      fixPopperBug (val){
        if(val.length > 0){
          this.$nextTick(() => {
            if(this.$refs.menuContent.$el.style) {
              if(this.$refs.menuContent.$el.style.display == "none") {
                this.$refs.menuContent.$el.style.display = "flex"
              }
            } else {
              this.$nextTick(() => {
                this.fixPopperBug(val);
              })
            }
          })
        }
      },
      onInput (value) {
        this.$emit('input', value)

        if (!this.mdOpenOnFocus) {
          this.showOptions()
        }

        if (this.searchTerm.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
          this.$emit('md-changed', this.searchTerm)
        }
      },
      showOptions () {
        if (this.showMenu) {
          return false
        }

        this.showMenu = true
        this.$nextTick(() => {
          this.$emit('md-opened')
        })
      },
      hideOptions () {
        this.$nextTick(() => {
          this.$emit('md-closed')
        })
      },
      selectItem (item, $event) {
        const content = $event.target.textContent.trim()

        this.searchTerm = content
        this.$emit('input', item)
        this.$emit('md-selected', item)
        this.hideOptions()
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdLayout/mixins";

  .md-autocomplete {
    .md-menu {
      width: 100%;
      display: flex;
    }
  }

  .md-autocomplete-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  .md-field.md-inline.md-autocomplete-box {
    @include md-elevation(2);
    padding-top: 2px;
    border-radius: 2px;

    &.md-focused {
      z-index: 120;
    }

    &:before,
    &:after {
      display: none;
    }

    .md-toolbar & {
      min-height: 40px;
      height: 40px;
      margin: 0;
      box-shadow: none;
    }

    .md-menu {
      align-items: center;
    }

    .md-input {
      padding-left: 16px;
    }

    &.md-focused label,
    label,
    .md-input-action {
      top: 50%;
      transform: translateY(-50%);
    }

    .md-input-action {
      right: 8px;
    }

    &.md-focused label,
    label {
      margin-top: 2px;
      left: 16px;
    }
  }

  .md-autocomplete-box-content:after {
    height: 6px;
    position: absolute;
    top: -6px;
    right: 0;
    left: 0;
    z-index: 120;
    border-bottom: 1px solid;
    content: "";
  }
  .md-menu-content-bottom-start.md-menu-content.no-items {
    box-shadow: none;
    .md-list {
      padding: 0;
    }
  }
</style>
