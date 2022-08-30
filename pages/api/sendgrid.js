import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (req, res) => {
    try {
        await sendgrid.send({
            to: 'vyshakvyshu791@gmail.com',
            from: 'contact@vyshaksukumaran.online',
            subject: 'Test subject',
            html: `<div>Test message idiots</div>`
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message })
    }
    return res.status(200).json({ error: "" })
}

export default sendEmail