const convertTime = (airingAt) => {
const airingDate = new Date(airingAt * 1000);
const now = new Date();
const diffInMs = airingDate - now;

const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

const timeLeft = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
return timeLeft;
}

export default convertTime;