const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    training: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },

    country: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: () => new Date(),
    },

    updatedAt: {
      type: Date,
      default: () => new Date(),
    },
  },
  { versionKey: false }
);

userSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const User = model('User', userSchema, 'users');

module.exports = {
  User,
};
