const mongoose = require("mongoose");

const inboxSchema = new mongoose.Schema(
  {
    inboxName: {
      type: String,
      required: true,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
      required: true,
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const Inbox = mongoose.model("Inbox", inboxSchema);
module.exports = Inbox;
