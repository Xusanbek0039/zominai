// Test endpointlari
const baseURL = "http://localhost:5000"

// 1. Health check
console.log("1. Health check testi:")
try {
  const healthResponse = await fetch(`${baseURL}/health`)
  const healthData = await healthResponse.json()
  console.log("Health check:", healthData)
} catch (error) {
  console.error("Health check xatoligi:", error.message)
}

// 2. Root endpoint
console.log("\n2. Root endpoint testi:")
try {
  const rootResponse = await fetch(`${baseURL}/`)
  const rootData = await rootResponse.json()
  console.log("Root endpoint:", rootData)
} catch (error) {
  console.error("Root endpoint xatoligi:", error.message)
}

// 3. Register endpoint testi
console.log("\n3. Register endpoint testi:")
try {
  const registerResponse = await fetch(`${baseURL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "+998901234567",
      password: "test123",
    }),
  })

  const registerData = await registerResponse.json()
  console.log("Register response:", registerData)

  if (registerData.success) {
    console.log("Token:", registerData.token)
  }
} catch (error) {
  console.error("Register xatoligi:", error.message)
}

console.log("\nBarcha testlar tugadi!")
