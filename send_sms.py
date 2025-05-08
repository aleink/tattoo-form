from twilio.rest import Client

# Twilio credentials
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'
twilio_phone_number = 'your_twilio_phone_number'

# Create a Twilio client
client = Client(account_sid, auth_token)

def send_sms(to_phone_number, message_body):
    message = client.messages.create(
        body=message_body,
        from_=twilio_phone_number,
        to=to_phone_number
    )
    return message.sid

# Example usage
if __name__ == "__main__":
    to_phone_number = '+1234567890'
    message_body = 'Your tattoo appointment is confirmed!'
    message_sid = send_sms(to_phone_number, message_body)
    print(f"Message sent with SID: {message_sid}")
