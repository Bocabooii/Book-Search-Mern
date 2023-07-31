const { User } = require("../models/User"); // Assuming you have a "Product" model
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const productData = await User.findOne({ _id: context.user._id }).select("-__v -password");
        return productData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const product = await User.create(args);
      const token = signToken(product);
      return { token, product };
    },

    login: async (parent, { email, password }, context) => {
      const product = await User.findOne({ email });
      if (!product) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const isValid = await product.isCorrectPassword(password);
      if (!isValid) {
        throw new AuthenticationError("Incorrect username or password");
      }
      const token = signToken(product);
      return { token, product };
    },

    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedProduct = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const currentUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return currentUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
