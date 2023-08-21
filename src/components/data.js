const employees = [
    { id: 1,
      name: "Ricardo",
      image: "https://designhooks.com/wp-content/uploads/2018/08/T-Shirt-Mockup-2-2-1600x1600.jpg",
      password: "Merei",
      position: "Manager",
      schedule: "Thursday, Friday, Saturday, Sunday",
      workTime: "7:00 AM to 6:00 PM",
      payPerHour: 40,
      timeInEvents : ["7:02 AM", "11:30 AM"],
      timeOutEvents : [],
      payForThisWeek: 0
    },
    { id: 2,
      name: "Edna",
      image: "http://dpegb9ebondhq.cloudfront.net/product_photos/589276/3600_00_hr_original.jpg",
      password: "Eloise",
      position: "Asst. Manager",
      schedule: "Wednesday,Thursday, Friday, Saturday",
      workTime: "7:00 AM to 6:00 PM",
      payPerHour: 35,
      timeInEvents : [],
      timeOutEvents : [],
      payForThisWeek: 0
    },
    { id: 3,
        name: "Johnny",
        image:"https://i.pinimg.com/originals/2b/35/aa/2b35aa6b7b30be9780ca207ee3b400c1.jpg",
        password: "Kuro",
        position: "Maintenance",
        schedule: "Tuesday,Wednesday,Thursday, Friday",
        workTime: "7:00 AM to 6:00 PM",
        payPerHour: 33,
        timeInEvents : [],
        timeOutEvents : [],
        payForThisWeek: 0
      },
  
  ]
  const getNextId = ((id) => () => ++id)(3)
  export { employees, getNextId }