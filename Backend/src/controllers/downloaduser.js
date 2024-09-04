import { format } from "@fast-csv/format";
import {User } from "../models/userModel.js";

const downloadUsers = async (req, res) => {
  try {
    const users = await User.find().lean();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users Not Found" });
    }

    // Set headers for CSV response
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'inline; filename="users.csv"');

    // Create a CSV stream
    const csvStream = format({ headers: true });
    csvStream.pipe(res);  // Pipe CSV stream to response

    // Write user data to CSV stream
    users.forEach(user => {
      csvStream.write(user);
    });

    // End the CSV stream
    csvStream.end();
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default downloadUsers;
