

export const firstNameChanged = (newValue) => {
  return {
    type: "firstName_changed",
    payload: {
      firstName: newValue
    }
  }
}

export const lastNameChanged = (newValue) => {
  return {
    type: "lastName_changed",
    payload: {
      lastName: newValue
    }
  }
}

export const genderSelected = (newValue) => {
  return {
    type: "gender_selected",
    payload: {
      gender: newValue
    }
  }
}

