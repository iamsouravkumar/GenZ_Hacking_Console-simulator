let a = [
    "Getting Hack Tool Ready!..."
    , "Initializing Hack Tool!..."
    , "Initializing Network... Please Wait...!"
    , "Connecting to service!..."
    , "Retrieving username!..."
    , "Username found!...."
    , "Trying a combination of 5 Trillion passwords!..."
    , "Password found!..."
    , "Connecting to Facebook!..."
    , "Connected Successfully!..."
    , "Conneting to Instagram!..."
    , "Connected Successfully!..."
    , "Conneting to Twitter!..."
    , "Connected Successfully!..."
    , "Try to fetch Chrome history!..."
    , "Chrome history fetch Successfully!... Yay!"
    , "User Hacked Successfully!..................."
  ]
  
  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(true) }, seconds * 1000)
    })
  }
  
  const showHack = async (message) => {
    await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
  }
  
  (async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i])
    }
  })()