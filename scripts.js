const accessToken = 'xoxp-4922301121489-4933349852192-4922416289409-9ca5d186673f54a28c5ebea334fe09a9';
const channelID = 'C04SRFZELTV';
const url = `https://slack.com/api/conversations.history?token=${accessToken}&channel=${channelID}`;

async function slack() {
const accessToken = 'your-access-token';
const channelID = 'your-channel-id';
    return fetch("https://slack.com/api/conversations.history?token=" + accessToken + "&channel=" + channelID)
   .then(function(response) {
    return response.json();
  })
  .then(async function(myJson) {
    return myJson;
  })

}
