document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:8081/login', {  // Alterado para o backend correto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error('Erro no servidor');
        }

        const data = await response.json();
        if (data.success) {
            alert("Login successful!");
        } else {
            alert("Invalid credentials!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Houve um erro. Tente novamente.");
    }
});
