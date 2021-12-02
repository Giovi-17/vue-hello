Vue.config.devtools = true;

const app = new Vue(
    {

        el: "#root",
        data: {
            textHTML: "Sono un h1 e il testo proviene dal javascript",
            linkImage : "https://miro.medium.com/max/1024/1*uywKrvOm4CKZTI6v3a9TjA.jpeg"
        }

    }
);