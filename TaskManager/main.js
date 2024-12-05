const person = {
    firstname: "Luis",
    secondname: "Gustavo",
    age: 28,
    programtypes: ["Python", "JS", "TS", "React"]
};

function showuserdata() {
    // Montando o nome completo
    const completename = `${person.firstname} ${person.secondname}`;
    console.log(`Complete name: ${completename}`);
    document.getElementById("completename").textContent = completename;

    // Calculando a nova idade (dobrando)
    let newage = person.age * 2;
    console.log(`Idade: ${newage}`);
    const resultage = `${person.age} ${newage}`;
    document.getElementById("resultage").textContent = resultage;

    // Pegando a linguagem preferida
    const preferedlanguage = person.programtypes[0];
    console.log(`Linguagem preferida: ${preferedlanguage}`);
    document.getElementById("preferedlanguage").textContent = preferedlanguage;

    // Dados de tarefas, como se fossem recebidos de um backend
    const todotask = {
        learnjs: true,
        dosomethinggood: false,
        havelunch: true,
        exercises: false
    };

    let completedtasks = [];
    let pendingtasks = [];

    // Loop para verificar se as tarefas estão concluídas ou pendentes
    for (const task in todotask) {
        if (todotask[task] === true) {
            completedtasks.push(task);
            console.log(`Tarefa ${task} foi concluída`);

            // Criando e adicionando a tarefa concluída à lista
            const listitem = document.createElement("li");
            listitem.textContent = task;
            document.getElementById("completedtasks").appendChild(listitem);
        } else {
            pendingtasks.push(task);
            console.log(`Tarefa ${task} está pendente`);

            // Criando e adicionando a tarefa pendente à lista
            const listitem = document.createElement("li");
            listitem.textContent = task;
            document.getElementById("pendingtasks").appendChild(listitem);
        }
    }

    // Mostrar as informações
    document.getElementById("userdata").style.display = "block";
}

document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const acceptedusername = "123";
    const acceptedupassword = "123";

    if (username === acceptedusername && password === acceptedupassword) {
        showuserdata();
    } else {
        // Exibir mensagem de erro
        const errorMessage = "Usuário ou senha inválida";
        document.getElementById("login-error").textContent = errorMessage; // Adiciona a mensagem de erro no HTML
    }
});
