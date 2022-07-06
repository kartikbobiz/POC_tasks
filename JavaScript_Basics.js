const users = [ 

    { 

        firstName: "Oliver", 

        lastName: "Jake", 

        isActive: true, 

        role: "student", 

        registeredAt: 1625112000000 

    }, 

    { 

        firstName: "Connor", 

        lastName: "Liam", 

        isActive: true, 

        role: "student", 

        registeredAt: 1609477200000 

    }, 

    { 

        firstName: "Charlie", 

        lastName: "", 

        isActive: true, 

        role: "admin", 

        registeredAt: 1619841600000 

    }, 

    { 

        firstName: "Thomas", 

        lastName: "", 

        isActive: true, 

        role: "student", 

        registeredAt: 1612155600000 

    }, 

    { 

        firstName: "George", 

        lastName: "Reece", 

        isActive: true, 

        role: "superAdmin", 

        registeredAt: 1614574800000 

    }, 

    { 

        firstName: "Oscar", 

        lastName: "Rhys", 

        isActive: false, 

        role: "superAdmin", 

        registeredAt: 1617249600000 

    }, 

    { 

        firstName: "William", 

        lastName: "Damian", 

        isActive: false, 

        role: "student", 

        registeredAt: 1609477200000 

    } 

]; 

function filterDeactivatedUsers() {
    const deactivatedUser = users.filter(user => !user.isActive)
    return deactivatedUser;
}

// filterDeactivatedUsers();

function getUserFirstAndLastNameAppended(data) {
  const fullName = data.map((user) => !user.lastName ? `${user.firstName}` : `${user.firstName} ${user.lastName}`)
  return fullName
}

// getUserFirstAndLastNameAppended()

function getCountOfUsersAfterGivenDate({ role, date }) {
  const count = users.reduce((acc, user) => (user.role == role && user.registeredAt > date) ? acc += 1 : acc, 0)
  return count;
}

// getCountOfUsersAfterGivenDate({role: 'student', date: 100})

function sortUsersByDate(sortOrder) {
  const sortedUsers = users.sort((a, b) => sortOrder == 'asc' ? a.registeredAt - b.registeredAt : b.registeredAt - a.registeredAt)
  return sortedUsers;
}

// sortUsersByDate('asc')

const getUsers = new Promise((resolve, reject) => {
  if (filterDeactivatedUsers) {
    resolve(filterDeactivatedUsers)
  } else if (getUserFirstAndLastNameAppended) {
    resolve(getUserFirstAndLastNameAppended)
  } else if (getCountOfUsersAfterGivenDate()) {
    resolve(getCountOfUsersAfterGivenDate({role:"student", "date": ""}))
  } else {
    reject(err)
  }
})

// getUsers.then(res =>  res()).then(data =>  getUserFirstAndLastNameAppended(data)).then(users => console.log(users))

getUsers.then(res => getCountOfUsersAfterGivenDate({role: "student", date: 100})).then(count => console.log("count of users", count))