const { Profile } = require("../models");


const insertProfile = async (firstName, lastName, phone, accountId) => {
    const profile = await Profile.create({firstName, lastName, phone, accountId});
    return profile;
  };
  
  module.exports = { insertProfile };
  