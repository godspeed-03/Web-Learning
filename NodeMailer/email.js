import { sendEmail } from "./sendemail.js"

export const serverfunctin = async (req, res) => {
    res
        .status(200)
        .json({
            message: "Server is running"
        })

}

export const emailsend = async (req, res) => {
    try {
        sendEmail();
        res.status(200).json({ message: 'Email sent sucessfully' })
    } catch (err) {
        res.status(404).json({
            message: `Failed ${err}`
        })
    }
}
