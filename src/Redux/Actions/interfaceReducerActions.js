

export const themeChanged = (newValue) => {
  return {
    type: "theme_changed",
    payload: {
      theme: newValue
    }
  }
}
