document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:8081/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // Verifique se a resposta é válida antes de tentar convertê-la
        if (!response.ok) {
            throw new Error('Erro no servidor');
        }

        const data = await response.json();
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "/login.html"; // Redireciona para a página de login
        } else {
            alert(data.message || "Erro ao cadastrar!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Houve um erro. Tente novamente.");
    }
});
