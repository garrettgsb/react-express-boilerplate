const axios = require('axios');

const newCurrentBeans = (currentBeans , beansSpent) => {
  return currentBeans - beansSpent;
}

const newLifetimeBeans = (currentLifetimeBeans, total) => {
  const beansToAdd = (total / 100)
  return currentLifetimeBeans + beansToAdd;
}

const updateBeans = (id, newCurrentBeans, newLifetimeBeans, tier, accelerator) => {
  axios.post(`/users/:${id}`, {
    current_beans: newCurrentBeans,
    lifetime_beans: newLifetimeBeans, 
    tier: tier,
    accelerator: accelerator
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

}