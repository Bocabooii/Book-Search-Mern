const { Product } = require("../models"); // Assuming you have a "Product" model
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const productData = await Product.findOne({ _id: context.user._id }).select("-__v -password");
        return productData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProduct: async (parent, args) => {
      const product = await Product.create(args);
      const token = signToken(product);
      return { token, product };
    },

    login: async (parent, { email, password }, context) => {
      const product = await Product.findOne({ email });
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
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true }
        );
        return updatedProduct;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const currentProduct = await Product.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return currentProduct;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
