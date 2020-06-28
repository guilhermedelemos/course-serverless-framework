import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'us-east-1'});

async function sendMail(event, context) {
  const records = event.Records;

  let result = [];
  for(let i = 0; i < records.length; i++) {
    console.log('record processing', records[i]);

    const email = JSON.parse(records[i].body);
    const { subject, body, recipient } = email;

    const params = {
      Source: 'guilherme.eti@gmail.com',
      Destination: {
        ToAddresses: [recipient],
      },
      Message: {
        Body: {
          Text: {
            Data: body,
          },
        },
        Subject: {
          Data: subject,
        },
      },
    };

    try {
      const mailResult = await ses.sendEmail(params).promise();
      result.push(mailResult);
    } catch(error) {
      console.error(error);
    }
  }
  console.log('sendMail finished', result);
  return result;
}

export const handler = sendMail;
