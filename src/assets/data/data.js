import {v4 as uuidv4} from 'uuid'
import ChessTicTacToe from '../images/chess-tic.png'

export const projectCardData = [
    {
        id: uuidv4(),
        title: 'Task Manager',
        description: 'Task manager application for planning, organize and track your tasks (Like ToDo List). Technologies used Node.JS, Express, MongoDB, Jest, Docker. Currently develop client U/I with React.',
        image: 'https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?k=20&m=1285308242&s=612x612&w=0&h=KS0e8XeicpKkm1A_JTySP2pXKxiW0UnGLdOmKwHMEOc=',
        github: 'https://github.com/AposLaz/task-manager'
    },
    {
        id: uuidv4(),
        title: 'Chess & TicTacToe',
        description: 'Play Chess or TicTacToe multiplayer. Join in tournaments and become become game Master. Technologies used PHP, JavaScript, HTML5, CSS3, Bootstrap5, MySQL, Docker',
        image: ChessTicTacToe,
        github: 'https://github.com/AposLaz/Chess-TicTacToe-multiplayer-game'
    },
    {
        id: uuidv4(),
        title: 'Weather App',
        description: 'Day Weather forecast for your location. Give a town and get wheather prediction. Technologies used Node.JS, Express. Currently develop client U/I with React.',
        image: 'https://image.shutterstock.com/image-photo/weather-forecast-concept-climate-change-260nw-1390294940.jpg',
        github: 'https://github.com/AposLaz/weather-app'
    },{
        id: uuidv4(),
        title: 'Betting Goal',
        description: 'Betting goal is a bet tip website. Admins give predictions, the results of every admin store and expose full history and previous day history. Technologies used PHP, JavaScript, HTML5, CSS3, Bootstrap5, MySQL.',
        image: 'https://img.freepik.com/premium-photo/soccer-ball-goal-with-net-green-background-this-photo-can-use-football-sport-goal-score-shoot-target-business-concept_484651-18892.jpg?w=2000',
        github: 'https://github.com/AposLaz/Betting-goal'
    },{
        id: uuidv4(),
        title: 'MERN e-commerce',
        description: 'E-commerce website under construction. Every user has an account, cart list, purchases with Stripe, JWT authentication & Admin Panel. Technologies are going to use Node.JS, Express, React.JS, MongoDB, Stripe, Kafka, Docker and microservices pattern.',
        image: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000',
        github: 'https://github.com/AposLaz/MERN-e-Commerce'
    }

]
    
