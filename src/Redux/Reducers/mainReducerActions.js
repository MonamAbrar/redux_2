

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

export const genderMaleClicked = (newValue) => {
  return {
    type: "genderMale_clicked",
    payload: {
      genderMale: newValue
    }
  }
}