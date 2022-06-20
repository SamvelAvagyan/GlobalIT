import whatsapp from "../UI/img/whatsapp.svg"
import viber from "../UI/img/viber.svg"
import telegram from "../UI/img/telegram.svg"
const icons = [whatsapp, viber, telegram];
const ButtonData = [{
    id: 1,
    color: "rgba(122, 122, 122, 0.25)",
    value: "+374 98 96-09-59",
},
{
    id: 2,
    icon: icons[0],
    color: "rgba(37, 211, 102, 0.8)",
    value: "Whatsapp",
},
{
    id: 3,
    icon: icons[1],
    color: "rgba(89, 38, 124, 0.8)",
    value: "Viber",
},
{
    id: 4,
    icon: icons[2],
    color: "rgba(0, 136, 204, 0.8)",
    value: "Telegram",
}
]

export default ButtonData