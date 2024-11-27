document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch('http://localhost:8081/login', {
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
            alert("Login bem-sucedido!");
            window.location.assign('/main.html');
        } else {
            alert(data.message || "Credenciais inválidas!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Houve um erro. Tente novamente.");
    }
});
