export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppNavbar } from '../../components/AppNavbar.vue'
export { default as CasesSection } from '../../components/CasesSection.vue'
export { default as HeaderSection } from '../../components/HeaderSection.vue'
export { default as PartnersSection } from '../../components/PartnersSection.vue'
export { default as ProfitSection } from '../../components/ProfitSection.vue'
export { default as SliderSection } from '../../components/SliderSection.vue'
export { default as WhereSection } from '../../components/WhereSection.vue'
export { default as UiAppButton } from '../../components/ui/AppButton.vue'
export { default as UiAppLoader } from '../../components/ui/AppLoader.vue'
export { default as UiAppPopup } from '../../components/ui/AppPopup.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
