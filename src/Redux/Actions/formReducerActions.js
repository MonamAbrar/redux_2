

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

export const emailChanged = (newValue) => {
  return {
    type: "email_changed",
    payload: {
      email: newValue
    }
  }
}

export const locationSelected = (newValue) => {
  return {
    type: "location_selected",
    payload: {
      location: newValue
    }
  }
}

export const dateSelected = (newValue) => {
  return {
    type: "date_selected",
    payload: {
      date: newValue
    }
  }
}
