export const funEmojis = [
	"👾",
	"⭐",
	"🌟",
	"🎉",
	"🎊",
	"🎈",
	"🎁",
	"🎂",
	"🎄",
	"🎃",
	"🎗",
	"🎟",
	"🎫",
	"🎖",
	"🏆",
	"🏅",
	"🥇",
	"🥈",
	"🥉",
	"⚽",
	"🏀",
	"🏈",
	"⚾",
	"🎾",
	"🏐",
	"🏉",
	"🎱",
	"🏓",
	"🏸",
	"🥅",
	"🏒",
	"🏑",
	"🏏",
	"⛳",
	"🏹",
	"🎣",
	"🥊",
	"🥋",
	"🎽",
	"⛸",
	"🥌",
	"🛷",
	"🎿",
	"⛷",
	"🏂",
	"🏋️",
	"🤼",
	"🤸",
	"🤺",
	"⛹️",
	"🤾",
	"🏌️",
	"🏇",
	"🧘",
    "❤️", // Red Heart
  "💖", // Sparkling Heart
  "💘", // Heart with Arrow
  "💝", // Heart with Ribbon
  "💞", // Revolving Hearts
  "💓", // Beating Heart
  "🌹", // Rose
  "🌷", // Tulip
  "🌻", // Sunflower
  "🌍", // Globe Showing Europe-Africa
  "🌎", // Globe Showing Americas
  "🌏", // Globe Showing Asia-Australia
  "🌈", // Rainbow
  "🎮", // Video Game
  "🕹️", // Joystick
  "⚡", // High Voltage
  "🎲", // Game Die
  "🏆", // Trophy
  "🧙‍♂️", // Man Mage
  "🧚‍♀️", // Woman Fairy
  "🕊️", // Dove
  "🌌", // Milky Way
  "⛪", // Church
  "🕌", // Mosque
  "🕍", // Synagogue
  "🛕", // Hindu Temple
  "🧘‍♂️", // Man in Lotus Position
  "💫", // Dizzy
  "⭐", // Star
  "🌟", // Glowing Star
  "✨" // Sparkles
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};