Vue.config.devtools = true;

const app = new Vue(
    {

        el: "#root",
        data: {
            textHTML: "Sono un h1 e il testo proviene dal javascript"
        }

    }
);