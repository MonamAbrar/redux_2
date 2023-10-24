

export const firstNameChanged = (newValue) => {
  return {
    type: "firstName_changed",
    payload: {
      firstName: newValue
    }
  }
}