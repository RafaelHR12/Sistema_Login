document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    try {
        const response = await fetch('http://localhost:8081/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Erro no servidor');
        }

        const data = await response.json();
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.assign('/login.html');
        } else {
            alert(data.message || "Erro ao cadastrar!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Houve um erro. Tente novamente.");
    }
});
