const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

const User= model('user', userSchema);

module.exports = User;
