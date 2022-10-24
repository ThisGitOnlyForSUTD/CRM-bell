export const state = () => ({
  isOpen: false,
})

export const getters = {
  isOpen(state) {
    return state.isOpen
  }
}

export const mutations = {
  changeIsOpen (state, val) {
    state.isOpen = val
  }
}
