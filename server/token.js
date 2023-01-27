const User = require("./models/users.model");

const saveToken = async(email, accessToken, refreshToken) => {
  // check if user is already in database
  try {
    const user = await User.findOne({email})
    if(!user) {
      const newUser = User.create({
        email, accessToken, refreshToken
      })
      console.log("NEW USER CREATED : ",newUser)
    }
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    await user.save();
    console.log("USER TOKEN CHANGED : ",user)

  } catch (err) {
    console.log(err)
  }
}

const getToken = async(email) => {
  try {
    const user = await User.findOne({email})
    if(!user) {
      console.log("NO USER FOUND")
      return;
    }
    const credentials = {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    }
    return credentials;
  } catch (err) {
    console.log(err)
  }
}

module.exports = {saveToken, getToken};